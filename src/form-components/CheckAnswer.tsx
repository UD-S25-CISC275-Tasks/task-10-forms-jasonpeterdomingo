import React, { useState } from "react";
import Form from "react-bootstrap/Form";
export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Type Answer Below:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
