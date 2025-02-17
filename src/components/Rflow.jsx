import { useState, useCallback } from 'react';
import {
    ReactFlow,
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/style.css';
import CircleNode from './../ReactFlow/CircleNode';
import JSLogo from './../assets/icons/js.png'
import PythonLogo from './../assets/icons/python.png'
import ReactLogo from './../assets/icons/icons8-react-native-100.png'
import PHPLogo from './../assets/icons/php.png'
import ElecLogo from './../assets/icons/electron.png';
import NODEJSLogo from "./../assets/icons/node.png"
import ExpressLogo from './../assets/icons/express.png';
import JavaLogo from './../assets/icons/java.png'
import JSPLogo from './../assets/icons/jsp.png'
import SpringBootLogo from "./../assets/icons/spring.png"
import CssLogo from './../assets/icons/Css.png'
import SassLogo from './../assets/icons/Sass.png'
import TailwindLogo from './../assets/icons/tailwind.png'
import DBLogo from './../assets/icons/database.png'
import SQLLogo from './../assets/icons/sql.png'
import SQLiteLogo from './../assets/icons/sqlite.png'
import MysqlLogo from './../assets/icons/Mysql.png'
import PostgreLogo from './../assets/icons/postgre.png'
import LaravelLogo from './../assets/icons/Laravel.png'

const nodeTypes = { custom: CircleNode };

const nodeData = [
    { id: '1', label: 'JavaScript', image: JSLogo, position: { x: 0, y: 0 }, hasSource: true, hasTarget: false },
    { id: '2', label: 'Node JS', image: NODEJSLogo, position: { x: 100, y: 0 }, hasSource: true, hasTarget: true },
    { id: '3', label: 'React JS', image: ReactLogo, position: { x: 200, y: -100 }, hasSource: false, hasTarget: true },
    { id: '4', label: 'Express JS', image: ExpressLogo, position: { x: 200, y: 0 }, hasSource: false, hasTarget: true },
    { id: '5', label: 'Electron JS', image: ElecLogo, position: { x: 200, y: 100 }, hasSource: false, hasTarget: true },
    { id: '6', label: 'PHP', image: PHPLogo, position: { x: 0, y: 200 }, hasSource: true, hasTarget: false },
    { id: '7', label: 'Laravel', image: LaravelLogo, position: { x: 100, y: 200 }, hasSource: false, hasTarget: true },
    { id: '8', label: 'Python', image: PythonLogo, position: { x: 200, y: 200 }, hasSource: false, hasTarget: false },
    { id: '9', label: 'Css', image: CssLogo, position: { x: 300, y: -50 }, hasSource: true, hasTarget: false },
    { id: '10', label: 'Sass', image: SassLogo, position: { x: 400, y: -100 }, hasSource: false, hasTarget: true },
    { id: '11', label: 'Tailwind', image: TailwindLogo, position: { x: 400, y: 0 }, hasSource: false, hasTarget: true },
    { id: '12', label: 'DataBases', image: DBLogo, position: { x: 300, y: 100 }, hasSource: true, hasTarget: false },
    { id: '13', label: 'SQL', image: SQLLogo, position: { x: 400, y: 100 }, hasSource: true, hasTarget: true },
    { id: '14', label: 'SQLite', image: SQLiteLogo, position: { x: 500, y: 0 }, hasSource: false, hasTarget: true },
    { id: '15', label: 'Mysql', image: MysqlLogo, position: { x: 500, y: 100 }, hasSource: false, hasTarget: true },
    { id: '16', label: 'PostgreSQL', image: PostgreLogo, position: { x: 500, y: 200 }, hasSource: false, hasTarget: true },
    { id: '17', label: 'Java', image: JavaLogo, position: { x: 500, y: -100 }, hasSource: true, hasTarget: false },
    { id: '18', label: 'JSP', image: JSPLogo, position: { x: 600, y: -100 }, hasSource: false, hasTarget: true },
    { id: '19', label: 'SpringBoot', image: SpringBootLogo, position: { x: 600, y: 0 }, hasSource: false, hasTarget: true },
];


const initialNodes = nodeData.map(node => ({
    id: node.id,
    data: { 
        label: node.label, 
        image: node.image, 
        id: node.id,
        hasSource: node.hasSource || false,  
        hasTarget: node.hasTarget || false 
    },
    position: node.position,
    type: 'custom',
}));


const EdgeAnim = true;
const initialEdges = [
    { id: '1-2', source: '1', target: '2', animated: EdgeAnim },
    { id: '2-3', source: '2', target: '3', animated: EdgeAnim },
    { id: '2-4', source: '2', target: '4', animated: EdgeAnim },
    { id: '2-5', source: '2', target: '5', animated: EdgeAnim },
    { id: '6-7', source: '6', target: '7', animated: EdgeAnim },
    { id: '9-10', source: '9', target: '10', animated: EdgeAnim },
    { id: '9-11', source: '9', target: '11', animated: EdgeAnim },
    { id: '12-13', source: '12', target: '13', animated: EdgeAnim },
    { id: '13-14', source: '13', target: '14', animated: EdgeAnim },
    { id: '13-15', source: '13', target: '15', animated: EdgeAnim },
    { id: '13-16', source: '13', target: '16', animated: EdgeAnim },
    { id: '17-18', source: '17', target: '18', animated: EdgeAnim },
    { id: '17-19', source: '17', target: '19', animated: EdgeAnim },
];

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    return (
        <div className='h-max w-max p-1 bg-[#1C1C1C] rounded-2xl'>
            <div className='h-[80vh] w-[80vw] bg-gray-100 rounded-xl'>
                <ReactFlow
                    nodes={nodes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    fitView
                    nodeTypes={nodeTypes}
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
}

export default Flow;
