/* unused, but good for visuzlizer */
export type Presence = {
  data: {
    spotify             ?: boolean;
    listening_to_spotify?: boolean;

    kv?: { [key: string]: string }; // unused for nao 

    discord_user?: {
      username         : string;
      public_flags     : number;
      id               : string;
      display_name     : string;
      discriminator    : string;
      bot              : boolean;
      avatar_decoration: null;
      avatar           : string;
    }
    discord_status?: string;
    activities?: {
      type      : number;
      name      : string;  // "Visual Studio Code", 
      state     : string;  // workspace here state "Workspace: thien-personal-website"
      details   : string;  // "Editing presense.types.ts"
      created_at: number;  // 1692719580379
      id        : string;
      timestamps: {
        start: number;
        end  : number;
      };
      assets: {
        large_text : string;
        large_image: string;
        small_text : string;
        small_image: string;
      };
      session_id: string;
      buttons   : {
        [key: string]: string;
      }[];
      application_id: string;  // "383226320970055681" <-- Vscode
                               // "383226320970055681" <-- git kraken
    }[];
  }
}