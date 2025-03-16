import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Left: <span>{attempts}</span>
            <div>
                <Form.Group controlId="giveAttempts">
                    <Form.Label>Number of Attempts Requested:</Form.Label>
                    <Form.Control
                        type="number"
                        value={requests}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setRequests(event.target.value);
                        }}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                    disabled={!attempts}
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        setAttempts(attempts + Number(requests));
                    }}
                    disabled={!attempts}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
