import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-amber-500 font">Hello next js</h1>

      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image width={400} height={400}
      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary ">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
}
