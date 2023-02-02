import FAQ1 from './FAQ1';
import FAQ2 from './FAQ2';
import FAQ3 from './FAQ3';
import FAQ4 from './FAQ4';
import FAQ5 from './FAQ5';

export default function FAQ() {
  return (
    <>
      {/* <hr style={{height:"92vw",width:"inherit"}}/> */}
      {/* <hr style="height:2px;border-width:0;color:gray;background-color:gray"></hr> */}
      <h2 className="faq-label-container">Frequently Asked Questions</h2>
      <FAQ1/>
      <FAQ2/>
      <FAQ3/>
      <FAQ4/>
      <FAQ5/>
    </>
  );
}
