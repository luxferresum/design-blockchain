export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
  this.transition(
    this.fromRoute('intro'),
    this.toRoute('api'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
