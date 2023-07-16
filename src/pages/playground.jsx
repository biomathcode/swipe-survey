import React, { useCallback, useState, useRef } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MiniMap,
  Panel,
  MarkerType,
  useReactFlow,
  ReactFlowProvider,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", type: "input", position: { x: 0, y: 0 }, data: { label: "1" } },
  {
    id: "3",
    type: "default",
    position: { x: 100, y: 100 },
    data: { label: "3" },
  },

  {
    id: "2",
    type: "default",
    position: { x: -50, y: 100 },
    data: { label: "2" },
  },
  {
    id: "5",
    type: "output",
    position: { x: 200, y: 200 },
    data: { label: "Thanks for your feedback" },
  },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "No",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FA4444", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "edges-e5-7",
    source: "1",
    target: "3",
    label: "Yes",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

let id = 4;
const getId = () => `${id++}`;

const fitViewOptions = {
  padding: 3,
};

function Playground() {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [variant, setVariant] = useState("cross");
  const { project } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      console.log(params);
      setEdges((eds) => addEdge(params, eds));
    },

    [setEdges]
  );

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        const newNode = {
          id,
          // we are removing the half of the node width (75) to center the new node
          position: project({
            x: event.clientX - left - 75,
            y: event.clientY - top,
          }),
          data: { label: `Node ${id}` },
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [project]
  );
  return (
    <div
      ref={reactFlowWrapper}
      style={{ width: "100vw", height: "calc(100vh - 80px)" }}
    >
      <ReactFlow
        onSelect={(e) => {
          console.log("select", e);
        }}
        onSelectCapture={(e) => {
          console.log("selectcapture", e);
        }}
        onSelectionChange={(e) => {
          console.log("selectchange", e);
        }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
      >
        <Controls />
        <MiniMap />
        <Background />
        <Panel>
          <div>
            variant: <input />
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default function AddComponent() {
  return (
    <ReactFlowProvider>
      <Playground />
    </ReactFlowProvider>
  );
}
