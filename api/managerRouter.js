const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://humanoid:mCoulFADKQbpgaQO@cluster0.smoja.mongodb.net/kofta?retryWrites=true&w=majority',{useNewUrlParser: true});
var conn=mongoose.Collection;
var userSchema=new mongoose.Schema({

  email: {type: String,
    required: true,
    unique:true,
  },
  firstName: {type: String,
    required: true,
    },
  lastName: {type: String,
  	required: true,
  },
  gender: {type: String,
  	required: true,
  },
  password: {type: String,
    required: true,
    },
  date: {type: Date,
  	default: Date.now
  }
});

var managerModel=mongoose.model('manager',userSchema);
module.exports=managerModel;
