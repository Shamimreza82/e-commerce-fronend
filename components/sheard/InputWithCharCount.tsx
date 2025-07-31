import { Input } from "../ui/input";

/* eslint-disable @typescript-eslint/no-explicit-any */
type InputWithCharCountProps = {
  field: any;
  maxLength: number;
  placeholder?: string;
};

export const InputWithCharCount = ({
  field,
  maxLength,
  placeholder,
}: InputWithCharCountProps) => (
  <div>
    <Input placeholder={placeholder}maxLength={maxLength}/>
    <p className={`text-sm text-right ${(field.value?.length || 0) >= maxLength? "text-red-500": "text-muted-foreground" }`}>
      {field.value?.length || 0} / {maxLength}
    </p>
  </div>
);
