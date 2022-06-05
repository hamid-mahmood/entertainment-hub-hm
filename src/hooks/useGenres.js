const useGenres= (selectedGenres)=>{
    if(selectedGenres.length < 1) return "";

    const genreIds = selectedGenres.map((g) => g.id);
    // reduce takes two parameters, one is accumulator, second is current value 
    // acc is the value in which everything is going to be added
    // initail array will be like 
    // 1
    // 2
    // 3
    // 4
    // after reduce it will be 1,2,3,4
    return genreIds.reduce((acc,curr) => acc + ","+curr);
}
 
export default useGenres;