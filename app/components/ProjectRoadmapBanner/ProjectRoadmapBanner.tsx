import { Link } from "@remix-run/react";

const Dot = ({ color }: { color: string }) => {
  return <div className={`w-2 h-2 rounded-full ${color}`} />;
};

type RoadmapCategoryProps = {
  name: "Planned" | "In-Progress" | "Live";
  color: string;
  count: number;
};

const RoadmapCategegory = ({ count, name, color }: RoadmapCategoryProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-4">
        <Dot color={color} /> <p className="text-fg-secondary">{name}</p>
      </div>

      <p className="text-fg-secondary font-bold">{count}</p>
    </div>
  );
};

export const ProjectRoadmapBanner = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="mb-6 flex justify-between items-center">
        <h4 className="text-lg text-fg-primary font-bold">Roadmap</h4>

        <Link
          to="/roadmap"
          className="text-sm text-brand-blue-primary underline"
        >
          View
        </Link>
      </div>

      <div className="flex flex-col space-y-2">
        <RoadmapCategegory name="Planned" color="bg-brand-orange" count={2} />

        <RoadmapCategegory
          name="In-Progress"
          color="bg-brand-purple"
          count={3}
        />

        <RoadmapCategegory
          name="Live"
          color="bg-brand-blue-secondary"
          count={1}
        />
      </div>
    </div>
  );
};
