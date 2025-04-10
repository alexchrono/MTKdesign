
    const showDetails=(index)=>{

    //  const ulAllJobs=document.querySelector('#allOurJobs')
    //  ulAllJobs.style.display='none'
    const allJobCards= document.querySelectorAll('.newJobCard')

    for (let ele of allJobCards){
    ele.style.display='none'}

    const particularJobCard= document.querySelector(`.newJobCard.newJobCard-${index-1}`)
    const children = particularJobCard.children;

    for (let ele of children){
        ele.style.display='none'
    }

    const ourGood1=particularJobCard.querySelector('.detailsNew')
    ourGood1.style.display='flex'
    const titleJob=particularJobCard.querySelector('.titleJob')
    titleJob.style.display='none'
    particularJobCard.style.display='flex'

     const ourDetails= document.querySelector(`.detailsNew-${index}`)
     ourDetails.style.display='flex'
     ourDetails.style.width='100%'
     ourDetails.style.height='100%'

    }




export {showDetails}
