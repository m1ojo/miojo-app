import React from 'react';
import styles from '../scss/SubmitCode.module.scss';
import { Dropdown, Button, Input} from 'semantic-ui-react';
const classNames = require('classnames');

export default class SubmitCode extends React.Component {
    render() {
        return(
            <div className={classNames(styles.container,'submit')} >
                    <div className="row">
                        <div className="col-xs-4">
                            <Dropdown
                                placeholder="Online Judge"
                                selection
                                options={
                                    [
                                        {
                                            key: "1",
                                            value: "cf",
                                            text: "CodeForces"
                                        },

                                        {
                                            key: "2",
                                            value: "uri",
                                            text: "URI"
                                        },

                                        {
                                            key: "3",
                                            value: "uva",
                                            text: "UVA"
                                        },
                                    ]
                                }   
                            />
                        </div>
                        <div className="col-xs">
                            <Input 
                                required
                                placeholder="Problem ID:"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs">
                            < Dropdown
                                placeholder = "Online Judge"
                                selection
                                options = {
                                [{
                                        key: "1",
                                        value: "cf",
                                        text: "CodeForces"
                                    },

                                    {
                                        key: "2",
                                        value: "uri",
                                        text: "URI"
                                    },

                                    {
                                        key: "3",
                                        value: "uva",
                                        text: "UVA"
                                    },
                                ]
                            }
                            />
                        </div>
                    </div>
                    <div className="row">
                        {/* <FilePicker
                            className="col-xs"
                            width={250}
                            marginBottom={32}
                            onChange={files => console.log(files)}
                        /> */}
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
            </div>
        );
    }
}