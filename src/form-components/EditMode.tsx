import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    label="Edit mode?"
                    checked={editMode}
                    onChange={updateMode}
                />
            </div>
            <div>
                <p>
                    {name} is {student ? "a student" : "not a student"}.
                </p>
            </div>
            <div>
                {editMode && (
                    <div>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={updateName}
                            />
                        </Form.Group>

                        <Form.Check
                            type="checkbox"
                            id="student" // added id for unit test to recognize student checkbox
                            label="Are you a student?"
                            checked={student}
                            onChange={updateStudent}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
