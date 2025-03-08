import DEPLOY_OBJECTS from "../deployed_objects.json"
import { useObjectSync } from "../utils/hooks.ts"
import Quadrant from "./Quadrant.tsx"
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

export interface PlaceBoardProps {
    color: string
}

export default ({ color }: PlaceBoardProps) => {
    const quadrant_responss = DEPLOY_OBJECTS.QUADRANTS.map(quad_id => useObjectSync(quad_id, 5))

    if (!quadrant_responss.every(x => x)) {
        return <div style={{
            border: "1px solid black", width: "800px", height: "800px",
            textAlign: "center"
        }}>
            <h1 style={{marginTop: "20rem"}}>Loading Content...</h1>
        </div>
    }

    const quadrants: [number[][], string][] = quadrant_responss.map((respone: any) => {
        return [respone.content.fields.board, respone.digest]
    })
    
    return <TransformWrapper>
        <div style={{border: "1px solid black", width: "fit-content"}}>
            <TransformComponent>
                <Quadrant quadrants={quadrants} color={color}/>
            </TransformComponent>
        </div>
    </TransformWrapper>
}