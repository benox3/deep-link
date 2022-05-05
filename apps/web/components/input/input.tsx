/* eslint-disable-next-line */
export interface InputProps {}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      name="company-website"
      id="company-website"
      class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
      placeholder="www.example.com"
    />
  );
}

export default Input;
