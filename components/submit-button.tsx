import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 
          h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none 
          transition-all
          focus:scale-110 
          hover:scale-110 
          hover:bg-gray-950
          active:scale-105 
          disabled:scale-100
          disabled:bg-opacity-65
          "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 aspect-square border-b-2 border-rose-600 rounded-full animate-spin"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 
        transition-all 
        group-hover:translate-x-1
        group-hover:-translate-y-1
        "
          />
        </>
      )}
    </button>
  );
}
