import * as React from "react";
import styled from "./styled";
import * as Grid from "./Grid";

export type DataPoint = {
  value: number;
};

export type BarGraphProps = {
  height: number;
  data: DataPoint[];
};

const StyledBar = styled.div`
  background: ${props => props.theme.accent};
  margin: 5px;
  align-self: flex-end;
  width: 100%;
  border-radius: 10px;
  max-width: 25px;
`;

const StyledBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function StyledDataPoint(props: { dataPoint: DataPoint }) {
  return <StyledBar style={{ height: `${props.dataPoint.value}%` }} />;
}

export default function BarGraph(props: BarGraphProps) {
  return (
    <div
      style={{
        height: `${props.height}px`
      }}
    >
      <Grid.Container width="equal">
        {props.data.map((dataPoint, _index) => (
          <Grid.Item key={_index}>
            <StyledBarContainer>
              <StyledDataPoint dataPoint={dataPoint} />
            </StyledBarContainer>
          </Grid.Item>
        ))}
      </Grid.Container>
    </div>
  );
}
