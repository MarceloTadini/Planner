import { Margin, usePDF } from "react-to-pdf";
import Header from "../Header";
import Home from "../../pages/Home";

function PDF(){
    const { targetRef } = usePDF({
        method: "open",
        filename: "usepdf-example.pdf",
        page: { margin: Margin.MEDIUM },
      });

    return(
        <div ref={targetRef}>
            <Header  ></Header>
            <Home></Home>
        </div>
    )
}

export default PDF

