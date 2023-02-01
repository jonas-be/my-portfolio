import Link from "next/link";
import {ProjectLinkMapping} from "../utils/BlogSystemUtil";

const ProjectList = ({baseUrl, list}: Props) => {

    return (
        <div className="grid">
            {list.map(i =>
                <Link href={baseUrl + "/" + i.primaryLink} className="m-4 p-4 bg-accent rounded-xl">
                    <p className="text-accent font-bold">{i.title}</p>
                </Link>
            )}
        </div>
    );
};


type Props = {
    baseUrl: string
    list:
        ProjectLinkMapping[]

}

export default ProjectList;
