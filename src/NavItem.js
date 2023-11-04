

export function NavItem({href, label}) {


    return (
        <div className="card bg-secondary h3 text-center">
            <a className="m-2 text-black" href={href}> {label} </a>
        </div>
    )
}