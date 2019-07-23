import React from 'react';
import styles from '../scss/SubmitCode.module.scss';
import { SelectField, FormField, Button, TextInputField, FilePicker} from 'evergreen-ui';
const classNames = require('classnames');

export default class SubmitCode extends React.Component {
    render() {
        return(
            <div className={classNames(styles.container,'submit')} >
                <FormField>
                    <div className="row">
                        <div className="col-xs-4">
                            <SelectField
                                label="Online Judge:"
                                required
                            >
                                <option>CodeForces</option>
                                <option>URI</option>
                                <option>UVA</option>
                            </SelectField>
                        </div>
                        <div className="col-xs">
                            <TextInputField 
                                required
                                label="Problem ID:"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs">
                            <SelectField
                                label="Choose Problem's Language:"
                                required
                            >
                                <option>C++</option>
                                <option>Python 2</option>
                                <option>Python 3</option>
                            </SelectField>
                        </div>
                    </div>
                    <div className="row">
                        <FilePicker
                            className="col-xs"
                            width={250}
                            marginBottom={32}
                            onChange={files => console.log(files)}
                        />
                        <div 
                            className="col-xs"
                            style={{ textAlign: "right" }}
                        >
                            <Button 
                                appearance="primary"
                                iconAfter="arrow-right"
                            >Submit</Button>
                        </div>
                    </div>
                </FormField>
            </div>
        );
    }
}