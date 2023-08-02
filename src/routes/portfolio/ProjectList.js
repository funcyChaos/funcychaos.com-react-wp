import React, { useEffect, useRef } from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom'

function ProjectList(){
	const projects 				= useLoaderData()
	const [type, setType]	= useOutletContext()
	const last						= useRef(type)
	let softwareDev = []
	let automotive	= []
	for(const project of projects){
		if(project.acf.project_type == 'Software Development'){
			softwareDev.push(project)
		}else if(project.acf.project_type == 'Automotive'){
			automotive.push(project)
		}
	}
	useEffect(()=>{
		last.current	= type
		document.getElementById(type).classList.add('active')
	},[type])
	const lastMain = document.getElementById(last.current)
	if(lastMain){
		lastMain.classList.remove('active')
	}
	return (
		<>
			<main className='active project-list' id='software_dev'>
				{
					softwareDev.map((project, key)=>(
						<div className='project' key={key}>
							<a href={project.link}>
								<h1>{project.title.rendered}</h1>
							</a>
							<img src={project._embedded ? project._embedded['wp:featuredmedia'][0].source_url : null} alt="" />
							{/* <div dangerouslySetInnerHTML={{ __html: project.excerpt.rendered}} /> */}
						</div>
					))
				}
			</main>
			<main className='project-list' id='automotive'>
				{
					automotive.map((project, key)=>(
						<div className='project' key={key}>
							<a href={project.link}>
								<h1>{project.title.rendered}</h1>
							</a>
							<img src={project._embedded ? project._embedded['wp:featuredmedia'][0].source_url : null} alt="" />
							{/* <div dangerouslySetInnerHTML={{ __html: project.excerpt.rendered}} /> */}
						</div>
					))
				}
			</main>
		</>
	)
}

export default ProjectList