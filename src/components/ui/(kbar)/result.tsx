import { KBarResults, useMatches } from 'kbar'
import { ResultItem } from '@/components/ui/(kbar)/index'

/**
 * When you search on the Kbar, this will be the result of your input
 * @see documentation on Kbar https://github.com/timc1/kbar
 */
const Results = () => {
  // const groups = useMatches()
  // console.log(groups)
  // function isActionImpl(item: any): item is ActionImpl {
  //   return item && typeof item !== 'string' && 'id' in item
  // }
  // function notActionImpl(item: any): item is string {
  //   return !isActionImpl(item)
  // }
  // const flattened = useMemo(() => {
  //   return groups.results.filter(isActionImpl)
  // }, [groups.results])
  // return (
  //   <KBarResults
  //     items={flattened}
  //     onRender={({ item, active }) =>
  //       typeof item === 'string' ? (
  //         <div className="bg-slate-600 pl-1 pt-2 uppercase">{item}</div>
  //       ) : (
  //         <div
  //           style={{
  //             background: active ? '#eee' : 'transparent',
  //           }}
  //         >
  //           {/* {item.name} */}
  //           <ResultItem action={item} active={active} />
  //         </div>
  //       )
  //     }
  //   />
  // )

  /* Lession learned: read the docs */
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          /* What section the result is from */
          <div className="px-5 py-2 font-dosis text-xs uppercase tracking-wide opacity-80">{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

export default Results
