import Link from "next/link"
import { XmlTag } from "../components/XmlTag"
import { projects, years } from "../data/projects"
import type { Project } from "../data/projects"
import type { GetServerSidePropsContext } from "next/types"

export const getStaticProps = () => ({
    props: {
        title: "Portfolio",
        description: "Here are some of my projects",
    },
})

export const getServerSideProps = ({ res }: GetServerSidePropsContext) => {
    res.setHeader(
        "Cache-Control",
        "public, max-age=3600, stale-while-revalidate=86400"
    )

    return {
        props: {},
    }
}

const makeId = (name: string) => name
    .toLowerCase()
    .replace(/[()[\]{}]+/g, "")
    .replace(/[^a-z0-9]+/g, "-")

const mapProject = (project: Project) => {
    const id = makeId(`project-${project.year}-${project.name}`)

    return (
        <XmlTag key={project.name} tag="div" id={id}>
            <Link href={"#" + id} className="hidden" scroll={false}>
                <XmlTag tag="h3">{project.name}</XmlTag>
            </Link>
            <XmlTag tag="script" language="json">
                {JSON.stringify(project, null, 4)}
            </XmlTag>
        </XmlTag>
    )
}

const Page = () => (
    <>
        <XmlTag tag="h1">Portfolio</XmlTag>
        {years.map((year) => {
            const id = makeId("projects-year-" + year)
            return (
                <XmlTag key={year} tag="section" id={id}>
                    <Link href={"#" + id} className="hidden" scroll={false}>
                        <XmlTag tag="h2">{year.toString()}</XmlTag>
                    </Link>
                    {projects
                        .filter((project) => project.year === year)
                        .map(mapProject)}
                </XmlTag>
            )
        })}
    </>
)

export default Page
