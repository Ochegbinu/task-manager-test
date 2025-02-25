import { FilterType } from "@/types";

interface TaskFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function TaskFilter({ activeFilter, onFilterChange }: TaskFilterProps) {
  const filters: FilterType[] = ["all", "pending", "completed"];
  
  return (
    <div className="flex space-x-2 mb-4">
      <span className="text-sm font-medium text-gray-700">Filter:</span>
      <div className="flex rounded-md shadow-sm" role="group">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-1 text-xs font-medium rounded capitalize ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}