import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ThemeContext } from "@/context/ThemeContext";
import { useGitHub } from "@/hooks/useGithub";

export default function Github() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";
  const isDark = theme === "dark";

  const { data, loading, error } = useGitHub("Derrick-MUGISHA");

  return (
    <Card
      className={`w-full max-w-md rounded-xl shadow-lg p-4 transition-colors duration-300
        ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <CardHeader className="pb-2">
        <CardTitle
          className={`text-left text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          GitHub Profile
        </CardTitle>
      </CardHeader>

      <CardContent>
        {loading ? (
          <p className={isDark ? "text-gray-300" : "text-gray-700"}>
            Loading...
          </p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : data ? (
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-4">
              <img
                src={data.avatar_url}
                alt="Avatar"
                className={`w-20 h-20 rounded-full border-2 ${
                  isDark ? "border-gray-600" : "border-gray-300"
                }`}
              />
              <div
                className={`flex flex-col space-y-1 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {/* <p><span className="font-bold">Name:</span> {data.name}</p> */}
                <p>
                  <span className="font-bold">Username:</span> {data.login}
                </p>
                <p>
                  <span className="font-bold">Bio:</span> {data.bio || "-"}
                </p>
                <p>
                  <span className="font-bold">Blog:</span>{" "}
                  {data.blog ? (
                    <a href={data.blog} target="_blank" className="underline">
                      {data.blog}
                    </a>
                  ) : (
                    "-"
                  )}
                </p>
                <p>
                  <span className="font-bold">Twitter:</span>{" "}
                  {data.twitter_username ? `@${data.twitter_username}` : "-"}
                </p>
              </div>
            </div>

            <div
              className={`flex justify-between mt-3 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p>
                <span className="font-bold">Repos:</span> {data.public_repos}
              </p>
              <p>
                <span className="font-bold">Gists:</span> {data.public_gists}
              </p>
              <p>
                <span className="font-bold">Followers:</span> {data.followers}
              </p>
              <p>
                <span className="font-bold">Following:</span> {data.following}
              </p>
            </div>

            <div
              className={`text-sm mt-2 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {/* <p>Profile created: {new Date(data.created_at).toLocaleDateString()}</p> */}
              {/* <p>Last updated: {new Date(data.updated_at).toLocaleDateString()}</p> */}
              <p>
                <span className="font-bold">Company:</span>{" "}
                {data.company || "-"}
              </p>
              <p><span className="font-bold">Location:</span> {data.location || "-"}</p>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
