import swap from "./swap";

function selectionSort(items : number[]) : number[]{
  const len = items.length;
  let min;

  for (let i = 0; i < len; i++){
      //set minimum to this position
      min = i;
      //check the rest of the array to see if anything is smaller
      for (let j=i+1; j < len; j++){
          if (items[j] < items[min]){
              min = j;
          }
      }
      //if the minimum isn't in the position, swap it
      if (i != min){
          swap(items, i, min);
      }
  }
  return items;
}

export default selectionSort;