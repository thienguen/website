import { useState, useEffect } from 'react';
import { type guestbook } from '@prisma/client';
import { deleteGuestbookEntry, getGuestbookEntries } from '@/hooks/useGuestbook';

export function useEntries() {
  const [entries, setEntries] = useState<guestbook[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await getGuestbookEntries();
        if (res && 'data' in res) {
          setEntries(res.data);
        } else {
          console.error('Unexpected response:', res);
        }
      } catch (error) {
        console.error('Failed to fetch guestbook entries:', error);
      }
    };
    fetchEntries().catch((err) => console.error('Error in fetchEntries:', err));
  }, []);

  const handleEntryDelete = (id: string) => {
    deleteGuestbookEntry({ id })
      .then(() => {
        setEntries(entries.filter((entry) => entry.id.toString() !== id)); // Remove the deleted entry from state
      })
      .catch((error) => {
        console.error('Error: DELETE guestbook', error);
      });
  };

  return { entries, handleEntryDelete };
}
