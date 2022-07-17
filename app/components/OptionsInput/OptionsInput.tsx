import {
  ListboxInput,
  ListboxButton,
  ListboxList,
  ListboxOption,
  ListboxPopover,
} from "@reach/listbox";
import { BiCheck, BiChevronDown, BiChevronUp } from "react-icons/bi";

import type { ListboxInputProps } from "@reach/listbox";

type OptionsInputProps = {
  label: string;
  description?: string;
  options: { value: string; label: string }[];
} & Partial<ListboxInputProps>;

export const OptionsInput = ({
  label,
  name,
  options,
  description,
}: OptionsInputProps) => {
  return (
    <label className="w-full">
      <div className="mb-4 flex flex-col">
        <span className="text-sm text-fg-primary font-bold mb-1">{label}</span>

        {description && (
          <span className="text-sm text-fg-secondary">{description}</span>
        )}
      </div>

      <ListboxInput name={name} defaultValue={options[0].value}>
        {({ value, isExpanded }) => (
          <>
            <ListboxButton className="w-full bg-bg-overlay !px-6 !py-4 rounded-lg outline-none !border-transparent !cursor-pointer">
              <span className="text-fg-primary">
                {options.find((option) => option.value === value)?.label}
              </span>
              <span>{isExpanded ? <BiChevronUp /> : <BiChevronDown />}</span>
            </ListboxButton>

            <ListboxPopover className="!mt-4 !py-0 rounded-xl overflow-hidden !outline-none !border-none option-input-list">
              <ListboxList className="">
                {options.map((option) => (
                  <ListboxOption
                    key={option.value}
                    value={option.value}
                    className="!py-3 !px-6 options-input-item"
                  >
                    <div className="!text-fg-secondary flex items-center justify-between">
                      <span>{option.label}</span>

                      <span>
                        <BiCheck className="opacity-0 text-lg text-brand-purple selected-icon" />
                      </span>
                    </div>
                  </ListboxOption>
                ))}
              </ListboxList>
            </ListboxPopover>
          </>
        )}
      </ListboxInput>
    </label>
  );
};
