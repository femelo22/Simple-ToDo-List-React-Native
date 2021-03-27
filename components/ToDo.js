import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput,
    FlatList,
    StyleSheet,
    SafeAreaView
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        padding: 20,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    field: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 10,
        fontSize: 15,
        color: '#333',
        borderRadius: 5,
        flex: 1,
        marginRight: 10
    },
    button: {
        backgroundColor: '#00cc99',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fdfdfd'
    },
    item: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 10,
        marginTop: 15,
        borderRadius: 3
    },
    form: {
        flexDirection: 'row'
    }
});


const ToDo = () => {

    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([]);

    const handleAdd = () => {
        if(task.trim()){
            updateTasks([...tasks, task]);//pega a task e adiciona no array
            updateTask('');//limpa o campo
        }
    }

    const handleRanderTask = ({ item }) => {
        return <Text style={styles.item}>
            {item}
        </Text>
    }

    return (
        <SafeAreaView>
            <Text style={styles.title}>Lista de afazeres:</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.field}
                    onChangeText={text => updateTask(text)}
                    value={task}
                />
                <TouchableWithoutFeedback onPress={handleAdd}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={handleRanderTask}
            />
        </SafeAreaView>
    )
};

export default ToDo;