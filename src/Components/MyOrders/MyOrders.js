import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [myOrders, setMyOrders] = useState([]);

    useEffect(()=>{
        fetch('https://possessed-shadow-25086.herokuapp.com/place_order')
        .then(res=>res.json())
        .then(data => setOrders(data) )
        console.log(orders)
    },[]);

    console.log(orders)

    useEffect(()=>{
        const foundOrders = orders.filter(order => order.useremail === user.email );
        
        setMyOrders(foundOrders);
    },[orders])

    //DELETING AN USER 
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `https://possessed-shadow-25086.herokuapp.com/place_order/${id}`;
        fetch(url, {
            method: 'DELETE'

        })

        .then(res=>res.json())
        .then(data => {
            if( data.deletedCount > 0 ){
                // alert('Data deleted successfully!');
                const remainigUsers = orders.filter(order => order._id !== id );
                setOrders(remainigUsers)
            }
        })
        }
    }
    return (
        <>
            <Container>
                <Row>
                    <h2 className='text-center my-5'>My Orders!</h2>
                </Row>
                <Row>
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                            <th>Name</th>
                            <th>Email</th>
                            <th>Destination</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        
                        {
                            myOrders.map(order =><tr key={order._id} order={order} >
                                <td> {order.username} </td>
                                <td> {order.useremail} </td>
                                <td> {order.userdestination} </td>
                                
                                <td> <button onClick={()=>handleDeleteUser(order._id)} className='btn btn-danger'>Delete</button> </td>
                            </tr>

                            )
                        }

                       


                      
                    </tbody>
                    </Table>    
                </Row>
            </Container>
        </>
    );
};

export default MyOrders;