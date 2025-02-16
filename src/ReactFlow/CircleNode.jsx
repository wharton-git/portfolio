import React from "react";
import { Handle, Position } from "@xyflow/react";

const CircleNode = ({ data }) => {

    console.log(data);

    return (
        <div className="relative w-14 h-14 p-1 flex items-center justify-center">
            {/* Image dans un nœud circulaire */}
            <img src={data.image} alt="Node" className="" />

            {/* Handles pour les connexions */}
            {data.hasSource && (
                <Handle type="source" position={Position.Right} />
            )}
            {data.hasTarget && (
                <Handle type="target" position={Position.Left} />
            )}
            <div className="absolute -bottom-4 p-1 rounded-sm text-[6px] bg-[#1c1c1c] text-gray-100">{data.label}</div>
        </div>

    );
};

export default CircleNode;
