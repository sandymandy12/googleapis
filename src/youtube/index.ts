import {
  google, // The top level object used to access services
  youtube_v3, // For every service client, there is an exported namespace
  Auth, // Namespace for auth related types
  // Common, // General types used throughout the library
} from "googleapis";

// Note: using explicit types like `Auth.GoogleAuth` are only here for
// demonstration purposes.  Generally with TypeScript, these types would
// be inferred.
const auth: Auth.GoogleAuth = new google.auth.GoogleAuth();
export const youtube: youtube_v3.Youtube = google.youtube({
  version: "v3",
  auth: "AIzaSyAVejlKZDKwQxgNCIV8l0s_kXk_cAKWg-k",
});

// There are generated types for every set of request parameters

export const search = async (query: string) => {
  const listParams: youtube_v3.Params$Resource$Search$List = {
    q: query,
    part: ["snippet"],
  };
  const res = await youtube.search.list(listParams);
  const listResults: youtube_v3.Schema$SearchListResponse = res.data;
  return listResults;
};
