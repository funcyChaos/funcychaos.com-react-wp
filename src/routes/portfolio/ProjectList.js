import React from 'react'
import { useLoaderData } from 'react-router-dom'

function ProjectList(){
	const projects = useLoaderData()
	let types			 = []
	for(const project of projects){
		console.log(project)
		if(!types.includes(project.acf.project_type)){
			types.push(project.acf.project_type)
		}
	}
	console.log(types)
	console.log(projects)
	return (
		<>
			{
				projects.map((project, key)=>(
					<div className='project' key={key}>
						<a href={project.link}>
							<h1>{project.title.rendered}</h1>
						</a>
						<img src={project._embedded ? project._embedded['wp:featuredmedia'][0].source_url : null} alt="" />
						{/* <div dangerouslySetInnerHTML={{ __html: project.excerpt.rendered}} /> */}
					</div>
				))
			}
		</>
	)
}

export default ProjectList