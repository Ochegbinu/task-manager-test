import { FilterType } from "@/types";

interface TaskFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function TaskFilter({ activeFilter, onFilterChange }: TaskFilterProps) {
  const filters: FilterType[] = ["All Tasks", "pending", "completed"];

  return (
    <div className="flex space-x-2 mb-4 items-center">
      {/* <span className="text-sm font-medium text-gray-700">Filter:</span> */}
      <div className="relative">
        <select
          value={activeFilter}
          onChange={(e) => onFilterChange(e.target.value as FilterType)}
          className="px-3 py-1 text-xs font-medium rounded  text-gray-700 hover:bg-gray-200   appearance-none pr-8"
        >
          {filters.map((filter) => (
            <option key={filter} value={filter} className="capitalize">
              {filter}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          ▼
        </div>
      </div>
    </div>
  );
}
