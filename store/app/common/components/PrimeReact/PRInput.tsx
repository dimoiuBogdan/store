import { ErrorMessage, useField } from "formik";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";
import { SelectItem } from "primereact/selectitem";
import { FC, HTMLInputTypeAttribute } from "react";
import { cn } from "../../utils/utils";

type Props = {
  calendar?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  id: string;
  label?: string;
  loading?: boolean;
  min?: number;
  multiple?: boolean;
  name: string;
  onChange: (value: any) => void;
  options?: SelectItem[];
  placeholder?: string;
  pt?: any;
  required?: boolean;
  textarea?: boolean;
  timeOnly?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: any;
  wrapperClassName?: string;
  mode?: "currency" | "decimal";
};

const PRInput: FC<Props> = ({
  calendar,
  className,
  disabled,
  icon,
  id,
  label,
  loading = false,
  min,
  name,
  placeholder,
  options,
  required = false,
  textarea,
  timeOnly,
  type = "text",
  wrapperClassName,
  onChange,
  pt,
  multiple,
  value,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={cn("relative mb-5", wrapperClassName)}>
      {label && (
        <label
          className="mb-1 block text-sm font-medium text-zinc-400"
          htmlFor={name}
        >
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <span className="relative">
        {calendar ? (
          <Calendar
            value={field.value ? new Date(field.value) : null}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            timeOnly={timeOnly}
            pt={{ root: { className: "w-full" } }}
            hourFormat="24"
            inputClassName={cn(
              "w-full rounded-md px-2 py-1 text-text-primary shadow-sm",
              { "bg-red-300": meta.touched && meta.error, className },
            )}
            placeholder={placeholder}
          />
        ) : options && !multiple ? (
          <Dropdown
            id={id}
            disabled={disabled}
            name={name}
            loading={loading}
            options={options}
            value={field.value}
            pt={{
              input: { className: "p-0 text-zinc-200" },
              item: {
                className:
                  "text-zinc-200 hover:bg-zinc-700 focus:bg-zinc-700 active:bg-zinc-700 bg-zinc-800 font-medium",
              },
              ...pt,
            }}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            panelClassName="overflow-hidden text-sm mt-2 shadow shadow-zinc-600 dropdown-panel"
            className={cn(
              "w-full rounded-md border border-zinc-600 bg-zinc-800 px-2 py-1 text-zinc-200 shadow-sm",
              {
                "bg-red-300": meta.touched && meta.error,
                className,
              },
            )}
            placeholder={placeholder}
          />
        ) : options && multiple ? (
          <MultiSelect
            value={field.value}
            onChange={(e) => onChange(e.value)}
            options={options}
            name={name}
            placeholder={placeholder}
            className={cn(
              "w-full rounded-md border border-zinc-600 bg-zinc-800 px-2 py-1 shadow-sm",
              {
                "bg-red-300": meta.touched && meta.error,
                className,
              },
            )}
            panelClassName="overflow-hidden text-sm mt-2 shadow bg-background shadow-zinc-600 dropdown-panel"
            itemClassName="text-zinc-200 hover:bg-zinc-700 focus:bg-zinc-700 active:bg-zinc-700 bg-zinc-800 font-medium"
            panelHeaderTemplate={() => <></>}
            pt={{
              checkboxContainer: {
                className: "h-4 w-4 mr-2",
              },
              checkbox: {
                box: {
                  className: "h-4 w-4",
                },
              },
              root: {
                className: "text-zinc-200",
              },
              item: {
                className: "text-sm",
              },
              label: {
                className: "p-0",
              },
            }}
          />
        ) : textarea ? (
          <InputTextarea
            id={id}
            disabled={disabled}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            name={name}
            value={field.value}
            className={cn(
              "w-full rounded-md border border-zinc-600 bg-zinc-800 px-2 py-1 shadow-sm",
              {
                "bg-red-300": meta.touched && meta.error,
                className,
              },
            )}
            placeholder={placeholder}
            pt={pt}
          />
        ) : type === "number" ? (
          <InputNumber
            id={id}
            disabled={disabled}
            onChange={(e) => {
              if (e.value == null || e.value === undefined) {
                onChange(null);
              } else {
                onChange(e.value);
              }
            }}
            maxFractionDigits={2}
            min={min}
            name={name}
            value={field.value || value || null}
            placeholder={placeholder}
            pt={{
              ...pt,
              input: {
                root: {
                  className: cn(
                    icon ? "pr-14" : "",
                    "bg-zinc-800 shadow-none",
                    {
                      "bg-red-300": meta.touched && meta.error,
                    },
                  ),
                },
              },
            }}
            className={cn(
              "w-full rounded-md border border-zinc-600 bg-zinc-800 px-2 py-1 shadow-sm",
              {
                [className || ""]: className,
                "bg-red-300": meta.touched && meta.error,
              },
            )}
          />
        ) : (
          <InputText
            id={id}
            disabled={disabled}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            name={name}
            value={field.value}
            placeholder={placeholder}
            pt={{
              ...pt,
              root: { className: cn(icon ? "pr-14" : "") },
            }}
            className={cn(
              "w-full rounded-md border border-zinc-600 bg-zinc-800 px-2 py-1 shadow-sm",
              {
                [className || ""]: className,
                "bg-red-300": meta.touched && meta.error,
              },
            )}
          />
        )}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-700">
          {icon}
        </div>
      </span>
      <ErrorMessage
        name={name}
        component="div"
        className="absolute text-sm text-red-400"
      />
    </div>
  );
};

export default PRInput;
