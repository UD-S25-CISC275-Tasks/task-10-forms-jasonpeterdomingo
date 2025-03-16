import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "magenta",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((indiv_color: string) => (
                    <Form.Check
                        key={indiv_color}
                        inline
                        type="radio"
                        name="color-options"
                        label={
                            <span style={{ backgroundColor: indiv_color }}>
                                {indiv_color}
                            </span>
                        }
                        value={indiv_color}
                        onChange={(event) => {
                            setColor(event.target.value);
                        }}
                        checked={color === indiv_color}
                    />
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
