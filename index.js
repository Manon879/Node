
import{}from"dotenv/config"
import cowsay from"cowsay"


console.log(cowsay.say({
    text: `Hello, my name is ${process.env.NAME} and I am from the ${process.env.CAMPUS} campus`
}));
