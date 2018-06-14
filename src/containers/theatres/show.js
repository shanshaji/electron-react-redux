import React, {Component} from 'react';
import { connect } from 'react-redux';
import fetchTheatre from '../../actions/theatres/fetch-theatre';

class ShowTheatre extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(id){
        this.props.fetchTheatre(this.props.match.params.id);
    }

    render(){
        const { theatre } = this.props;
        return(
            <div className="row">
                <div className="col-lg-4 col-xlg-3 col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <div className="p-l-20">
                                    <h3 className="font-medium">{theatre.name}</h3>
                                    <hr />
                                    <h5 className="b-b p-b-10 m-t-30">Address</h5>
                                    <span className="clearfix p-l-30">
                                        <div className="p-l-10">
                                                <small className="sub-text">{theatre.address}</small>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-xlg-8 col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Screens</h4>
                            <hr />
                            <div className="table-responsive">
                                    <table className="table stylish-table">
                                        <thead>
                                            <th> #</th>
                                            <th> Screen Name</th>
                                        </thead>
                                        <tbody>
                                            {theatre.screens_attributes.map((screen, index) => (
                                                <tr key={index}>
                                                    <td>{ index + 1}</td>
                                                    <td>{ screen.name }</td>
                                                </tr>
                                                
                                            )
                                            )}
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Contact Persons</h4>
                            <hr />
                            <div className="table-responsive">
                                    <table className="table stylish-table">
                                        <thead>
                                            <th> #</th>
                                            <th> Name</th>
                                            <th> Email</th>
                                            <th> Mobile</th>
                                        </thead>
                                        <tbody>
                                            {theatre.contact_persons_attributes.map((contact_person, index) => (
                                                <tr key={index}>
                                                    <td>{ index + 1 }</td>
                                                    <td>{ contact_person.first_name +' '+ (contact_person.last_name || '') }</td>
                                                    <td>{contact_person.email}</td>
                                                    <td>{contact_person.mobile_no}</td>
                                                </tr>
                                                
                                            )
                                            )}
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({theatre}) => {
    return {
        theatre
    }
}

export default connect(mapStateToProps, {fetchTheatre})(ShowTheatre);