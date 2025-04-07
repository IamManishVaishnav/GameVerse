import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameDetails } from "../utils/api";
import { Star } from "lucide-react";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGameDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchGameDetails(id);
        setGame(data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      } finally {
        setLoading(false);
      }
    };

    getGameDetails();
  }, [id]);

  if (loading) return <p className="text-white p-6">Loading game details...</p>;
  if (!game) return <p className="text-white p-6">Game not found.</p>;

  const {
    name,
    background_image,
    description_raw,
    released,
    rating,
    genres = [],
    tags = [],
    developers = [],
    publishers = [],
    website,
  } = game;

  return (
    <div className="min-h-screen bg-[#101010] text-white pt-20 py-10 px-4 md:px-10">
      <div className="glass-card max-w-5xl mx-auto rounded-2xl overflow-hidden border border-blue-600 shadow-xl">
        {/* Top Banner Image */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <img
            src={background_image || "/fallback.jpg"}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4 flex justify-between items-end">
            <h1 className="text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full text-white">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold">{rating?.toFixed(1) || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Details Split into Two Parts */}
        <div className="p-6 grid md:grid-cols-2 gap-6">
          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-white/80 leading-relaxed text-sm">{description_raw}</p>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline mt-3 inline-block"
              >
                Visit Official Website
              </a>
            )}
          </div>

          {/* Extra Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Release Year</h3>
              <p className="text-white/70">{released?.split("-")[0] || "N/A"}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Genres</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-2 py-1 text-xs bg-white/10 rounded-full border border-white/20"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium">Tags</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium">Developers</h3>
              <p className="text-white/70">{developers.map(dev => dev.name).join(", ") || "N/A"}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Publishers</h3>
              <p className="text-white/70">{publishers.map(pub => pub.name).join(", ") || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
