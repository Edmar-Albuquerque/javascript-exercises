
function reverseArray(a) {
  var ponteiroMenor = 0
  let ponteiroMaior = a.length - 1

  while (ponteiroMenor < ponteiroMaior) {
    //swap(troca)
    let temp = a[ponteiroMenor]
    a[ponteiroMenor] = a[ponteiroMaior]
    a[ponteiroMaior] = temp

    ponteiroMenor++
    ponteiroMaior--
  }
  console.log(a)
}

const arr = [1, 4, 3, 2]

reverseArray(arr)