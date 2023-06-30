import React from "react";
import "./Cell.css";

/** A single cell on the board.
 * 
 * This has no state -- just two props:
 * 
 * - flipCellsAroundMe: a function rec'd from the board which flips this cell and the cells around it
 * 
 * -isLit: boolean, is this cell lit?
 * 
 **/

function Cell({ flipCellsAroundMe, isLit = false}){
    const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
    return <td 
        className={classes}
        onClick={flipCellsAroundMe}
        role="button"
    />
}

export default Cell;