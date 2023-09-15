import Link from "next/link";

export default function StudentInfo() {
    return(
        <div>
            <p>Name: John Arvie Sangalang</p>
            <p>Course Section: CPRG 306 A</p>
            <Link className="hover:underline" href="https://github.com/aaaarvieeee/cprg306-assignments.git">https://github.com/aaaarvieeee/cprg306-assignments.git</Link>
        </div>
    )
};