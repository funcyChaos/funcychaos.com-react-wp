import React from 'react'
import { useLoaderData } from 'react-router-dom'

function ProjectList(){
	const projects = useLoaderData()
	return (
		<>
			{
				projects.map((project, key)=>(
					<div className='project' key={key}>
						<h1>{project.title.rendered}</h1>
						<img src={project._embedded['wp:featuredmedia'][0].source_url} alt="" />
						<div dangerouslySetInnerHTML={{ __html: project.excerpt.rendered}} />
					</div>
				))
			}
		</>
	)
}

export default ProjectList