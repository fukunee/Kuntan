# Kuntan
Kun's **Catan** Island Game. Play with your friends! **Let‘s ROLL!**



### Tech Design

B/S Architecture adopted: 

- Front End: Vue、AntDesign、Websocket
- Server End: Express.js、Websocket
- Data Persistant: MongoDB、Mongoose
- Engineer Tools: Vue-cli、Npm、Webpack
- Other Tools: 
  - @hapi/joi
  - bcryptjs
  - dotenv
  - jwt
  - morgan
  - babel
  - eslint
  - less



### Front-End Sketch

Display the game board by rendering A Simple String.

					 /█￣￣￣█\
				        /            \
				       /              \
				??3:1 /                \   ??2:1
			    /█￣￣￣█       ??       █￣￣￣█\
		           /           \      ??      /           \
		       	  /             \            /             \
		         /               \          /               \
	       /█￣￣￣█      ??        █＿＿＿█       ??       █￣￣￣█\
	 ??3:1/          \      ??       /          \      ??       /          \??2:1
	     /            \             /            \             /            \
	    /	           \           /              \           /              \
	   █ 	   ??       \█＿＿＿█       ??       █＿＿＿█/      ??       █
	    \      ??       /          \      ??      /          \      ??       /
	     \             /            \            /            \             /
	      \           /              \          /              \           /
	       \█＿＿＿█       ??       █＿＿＿█       ??       █＿＿＿█/
	      /          \       ??      /          \      ??       /          \
	     /            \             /            \             /            \
	    /	           \           /              \           /              \
	   █ 	   ??       \█＿＿＿█       ??       █＿＿＿█/      ??       █
	    \      ??       /          \       ??     /          \      ??       /
	??2:1\             /            \            /            \             /??3:1
	      \           /              \          /              \           /
	       \█＿＿＿█      ??        █＿＿＿█       ??       █＿＿＿█/
	      /          \      ??       /          \      ??       /          \
	     /            \             /            \             /            \
	    /	           \           /              \           /              \
	   █ 	  ??        \█＿＿＿█       ??       █＿＿＿█/      ??       █
	    \     ??         /         \      ??      /          \      ??       /
	     \             /            \            /            \             /
	      \           /              \          /              \           /
	       \█＿＿＿█       ??       █＿＿＿█       ??       █＿＿＿█/
	                 \       ??      /          \      ??       /
	                  \             /            \             /
	              ??3:1\           /              \           /??2:1
	                    \█＿＿＿█       ??       █＿＿＿█/
	                              \       ??       /
	                               \              /
	                                \            /
	                                 \█＿＿＿█/
	                                    ??2:1


​	
​	
​	
​	

### TODO

- Remove Router and integrate it into app.js
- Combine routes dir into api dir
- Make Server api-validator-controller-model Code-arch
- 