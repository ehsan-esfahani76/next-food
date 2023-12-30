import Link from "next/link";
export default function Button({type, onClick, to , children , buttonType = "lg" }) {
  const className = {
    lg : "bg-yellow-600 px-5 py-2 rounded-xl text-black text-lg hover:bg-yellow-500 transition-all duration-300" , 
    md : "bg-yellow-600 px-4 py-2 rounded-xl text-black text-base hover:bg-yellow-500 transition-all duration-300" , 
    sm : "bg-yellow-600 px-3 py-2 rounded-xl text-black text-sm hover:bg-yellow-500 transition-all duration-300" , 
    "trans-black" : "bg-transparent px-3 py-2 rounded-xl text-black" , 
    "trans-white" : "bg-transparent px-3 py-2 rounded-xl text-white" , 
  }
  if (to) {
    return (
      <Link href={to} className={className[buttonType]}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className[buttonType]}>
      {children}
    </button>
  );
}
