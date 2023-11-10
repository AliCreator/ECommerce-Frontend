import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { GrFormCheckmark } from 'react-icons/gr'

const ProductDetails = () => {
    const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="flex flex-col border-b border-slate-200">
    <div
      className="flex items-center font-bold cursor-pointer"
      onClick={() => setShowDetails(!showDetails)}
    >
      <span className="mr-1">
        {showDetails ? <AiOutlineUp /> : <AiOutlineDown />}
      </span>
      <h2>Deatils</h2>
    </div>
    {showDetails && (
      <div className="flex flex-col md:flex-row gap-4">
        <div className="basis-1/2 flex flex-col gap-4">
          <h3 className="mt-3 font-bold">Highlights</h3>
          <ul className="flex flex-col gap-1 pl-2">
            <li className="flex items-center gap-1">
              <span>
                <GrFormCheckmark />
              </span>
              6pc decorative bottle brush tree set
            </li>
            <li className="flex items-center gap-1">
              <span>
                <GrFormCheckmark />
              </span>
              Comes in assorted hues
            </li>
            <li className="flex items-center gap-1">
              <span>
                <GrFormCheckmark />
              </span>
              Suitable for tabletop display
            </li>
            <li className="flex items-center gap-1">
              <span>
                <GrFormCheckmark />
              </span>
              Indoor use only
            </li>
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col gap-3 pb-3">
          <h3 className="font-bold">Description</h3>
          <p>
            Elevate your festive decorations with this 6-Piece Sisal
            Bottle Brush Tree Set from Wondershop™. This set of tree
            figurines includes six bottle brush trees in varying sizes
            decorated with natural-looking sisal branches in assorted
            hues for seasonal charm. The tabletop tree figurines come
            mounted on a white round wooden bases, and you can display
            them on the mantel, desk, sideboard or shelf along with
            other decorative accents to create a lovely display.
          </p>
        </div>
      </div>
    )}
  </div>
  )
}

export default ProductDetails