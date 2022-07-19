import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    console.log(meta);
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
   
    return(
        <div className="btn-group">
        {prev && <Link href={prev} className="btn btn-outline text-3xl">«</Link>}
        <Link className="btn btn-outline text-2xl">{current}</Link>
        {next && <Link href={next} className="btn btn-outline text-3xl">»</Link>}
      </div>
    )
}

export default Paginator