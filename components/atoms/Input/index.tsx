export interface InputProps {
  label: string;
  id: string;
  placeHolder: string;
}

export default function Input(props: InputProps) {
  const { label, id, placeHolder, ...nativeProps } = props;

  return (
    <>
      <label
        for={id}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id={id}
        name={id}
        aria-describedby={id}
        placeholder={placeHolder}
        {...nativeProps}
      />
    </>
  );
}
