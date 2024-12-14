import { useMemo } from "react"


const range = (start ,end)=>{
    let length =end-start+1;
    return Array.from({length},(_, idx)=> idx+start)
}

export const usePagination =({
totalCount, 
pageSize,
sibilingCount=1,
currentPage
}) =>{
    const paginationRange = useMemo(()=>{
    const totalPageCount = Math.ceil(totalCount/pageSize);
        
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumber = sibilingCount+5;

    /*
    Case 1:
    If the number of pages is less than the page numbers we want to show in our
    paginationComponent, we return the range [1..totalPageCount]
    */
   if(totalPageNumber> totalPageCount){
    return range(1, totalPageCount)
   }

   /*
    Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
   */
    const leftSibilingIndex =Math.max(currentPage- sibilingCount,1)
    const rightSibilingIndex = Math.min()
    
},[totalCount, pageSize, sibilingCount]);
    return paginationRange
}