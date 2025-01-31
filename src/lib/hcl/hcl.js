
var Module = (function() {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

    return (
        function(Module) {
            Module = Module || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
            var Module = typeof Module !== 'undefined' ? Module : {};


// Set up the promise that indicates the Module is initialized
            var readyPromiseResolve, readyPromiseReject;
            Module['ready'] = new Promise(function(resolve, reject) {
                readyPromiseResolve = resolve;
                readyPromiseReject = reject;
            });

            if (!Object.getOwnPropertyDescriptor(Module['ready'], '_main')) {
                Object.defineProperty(Module['ready'], '_main', { configurable: true, get: function() { abort('You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '_main', { configurable: true, set: function() { abort('You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
                Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
                Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
                Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '___data_end')) {
                Object.defineProperty(Module['ready'], '___data_end', { configurable: true, get: function() { abort('You are getting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '___data_end', { configurable: true, set: function() { abort('You are setting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
                Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
                Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
                Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
                Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '_setThrew')) {
                Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, get: function() { abort('You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, set: function() { abort('You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZSt18uncaught_exceptionv')) {
                Object.defineProperty(Module['ready'], '__ZSt18uncaught_exceptionv', { configurable: true, get: function() { abort('You are getting __ZSt18uncaught_exceptionv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], '__ZSt18uncaught_exceptionv', { configurable: true, set: function() { abort('You are setting __ZSt18uncaught_exceptionv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


            if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
                Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
                Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
            }


// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
            var moduleOverrides = {};
            var key;
            for (key in Module) {
                if (Module.hasOwnProperty(key)) {
                    moduleOverrides[key] = Module[key];
                }
            }

            var arguments_ = [];
            var thisProgram = './this.program';
            var quit_ = function(status, toThrow) {
                throw toThrow;
            };

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

            var ENVIRONMENT_IS_WEB = true;
            var ENVIRONMENT_IS_WORKER = false;
            var ENVIRONMENT_IS_NODE = false;
            var ENVIRONMENT_IS_SHELL = false;

            if (Module['ENVIRONMENT']) {
                throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
            }



// `/` should be present at the end if `scriptDirectory` is not empty
            var scriptDirectory = '';
            function locateFile(path) {
                if (Module['locateFile']) {
                    return Module['locateFile'](path, scriptDirectory);
                }
                return scriptDirectory + path;
            }

// Hooks that are implemented differently in different runtime environments.
            var read_,
                readAsync,
                readBinary,
                setWindowTitle;


// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
            if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
                if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
                    scriptDirectory = self.location.href;
                } else if (document.currentScript) { // web
                    scriptDirectory = document.currentScript.src;
                }
                // When MODULARIZE, this JS may be executed later, after document.currentScript
                // is gone, so we saved it, and we use it here instead of any other info.
                if (_scriptDir) {
                    scriptDirectory = _scriptDir;
                }
                // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
                // otherwise, slice off the final part of the url to find the script directory.
                // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
                // and scriptDirectory will correctly be replaced with an empty string.
                if (scriptDirectory.indexOf('blob:') !== 0) {
                    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
                } else {
                    scriptDirectory = '';
                }

                if (!(typeof window === 'object' || typeof importScripts === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

                // Differentiate the Web Worker from the Node Worker case, as reading must
                // be done differently.
                {




                    read_ = function shell_read(url) {
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', url, false);
                        xhr.send(null);
                        return xhr.responseText;
                    };

                    if (ENVIRONMENT_IS_WORKER) {
                        readBinary = function readBinary(url) {
                            var xhr = new XMLHttpRequest();
                            xhr.open('GET', url, false);
                            xhr.responseType = 'arraybuffer';
                            xhr.send(null);
                            return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
                        };
                    }

                    readAsync = function readAsync(url, onload, onerror) {
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', url, true);
                        xhr.responseType = 'arraybuffer';
                        xhr.onload = function xhr_onload() {
                            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
                                onload(xhr.response);
                                return;
                            }
                            onerror();
                        };
                        xhr.onerror = onerror;
                        xhr.send(null);
                    };




                }

                setWindowTitle = function(title) { document.title = title };
            } else
            {
                throw new Error('environment detection error');
            }


// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
            var out = Module['print'] || console.log.bind(console);
            var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
            for (key in moduleOverrides) {
                if (moduleOverrides.hasOwnProperty(key)) {
                    Module[key] = moduleOverrides[key];
                }
            }
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
            moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
            if (Module['arguments']) arguments_ = Module['arguments'];if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) Object.defineProperty(Module, 'arguments', { configurable: true, get: function() { abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
            if (Module['thisProgram']) thisProgram = Module['thisProgram'];if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) Object.defineProperty(Module, 'thisProgram', { configurable: true, get: function() { abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
            if (Module['quit']) quit_ = Module['quit'];if (!Object.getOwnPropertyDescriptor(Module, 'quit')) Object.defineProperty(Module, 'quit', { configurable: true, get: function() { abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
            assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
            assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
            assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
            assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
            assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
            assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
            assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
            assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
            assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
            if (!Object.getOwnPropertyDescriptor(Module, 'read')) Object.defineProperty(Module, 'read', { configurable: true, get: function() { abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
            if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) Object.defineProperty(Module, 'readAsync', { configurable: true, get: function() { abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
            if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) Object.defineProperty(Module, 'readBinary', { configurable: true, get: function() { abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
            if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) Object.defineProperty(Module, 'setWindowTitle', { configurable: true, get: function() { abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
            var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
            var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
            var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
            var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';






// {{PREAMBLE_ADDITIONS}}

            var STACK_ALIGN = 16;

            function alignMemory(size, factor) {
                if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
                return Math.ceil(size / factor) * factor;
            }

            function getNativeTypeSize(type) {
                switch (type) {
                    case 'i1': case 'i8': return 1;
                    case 'i16': return 2;
                    case 'i32': return 4;
                    case 'i64': return 8;
                    case 'float': return 4;
                    case 'double': return 8;
                    default: {
                        if (type[type.length-1] === '*') {
                            return 4; // A pointer
                        } else if (type[0] === 'i') {
                            var bits = Number(type.substr(1));
                            assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
                            return bits / 8;
                        } else {
                            return 0;
                        }
                    }
                }
            }

            function warnOnce(text) {
                if (!warnOnce.shown) warnOnce.shown = {};
                if (!warnOnce.shown[text]) {
                    warnOnce.shown[text] = 1;
                    err(text);
                }
            }




// Wraps a JS function as a wasm function with a given signature.
            function convertJsFunctionToWasm(func, sig) {

                // If the type reflection proposal is available, use the new
                // "WebAssembly.Function" constructor.
                // Otherwise, construct a minimal wasm module importing the JS function and
                // re-exporting it.
                if (typeof WebAssembly.Function === "function") {
                    var typeNames = {
                        'i': 'i32',
                        'j': 'i64',
                        'f': 'f32',
                        'd': 'f64'
                    };
                    var type = {
                        parameters: [],
                        results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
                    };
                    for (var i = 1; i < sig.length; ++i) {
                        type.parameters.push(typeNames[sig[i]]);
                    }
                    return new WebAssembly.Function(type, func);
                }

                // The module is static, with the exception of the type section, which is
                // generated based on the signature passed in.
                var typeSection = [
                    0x01, // id: section,
                    0x00, // length: 0 (placeholder)
                    0x01, // count: 1
                    0x60, // form: func
                ];
                var sigRet = sig.slice(0, 1);
                var sigParam = sig.slice(1);
                var typeCodes = {
                    'i': 0x7f, // i32
                    'j': 0x7e, // i64
                    'f': 0x7d, // f32
                    'd': 0x7c, // f64
                };

                // Parameters, length + signatures
                typeSection.push(sigParam.length);
                for (var i = 0; i < sigParam.length; ++i) {
                    typeSection.push(typeCodes[sigParam[i]]);
                }

                // Return values, length + signatures
                // With no multi-return in MVP, either 0 (void) or 1 (anything else)
                if (sigRet == 'v') {
                    typeSection.push(0x00);
                } else {
                    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
                }

                // Write the overall length of the type section back into the section header
                // (excepting the 2 bytes for the section id and length)
                typeSection[1] = typeSection.length - 2;

                // Rest of the module is static
                var bytes = new Uint8Array([
                    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
                    0x01, 0x00, 0x00, 0x00, // version: 1
                ].concat(typeSection, [
                    0x02, 0x07, // import section
                    // (import "e" "f" (func 0 (type 0)))
                    0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
                    0x07, 0x05, // export section
                    // (export "f" (func 0 (type 0)))
                    0x01, 0x01, 0x66, 0x00, 0x00,
                ]));

                // We can compile this wasm module synchronously because it is very small.
                // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
                var module = new WebAssembly.Module(bytes);
                var instance = new WebAssembly.Instance(module, {
                    'e': {
                        'f': func
                    }
                });
                var wrappedFunc = instance.exports['f'];
                return wrappedFunc;
            }

            var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
            var functionsInTableMap;

// Add a wasm function to the table.
            function addFunctionWasm(func, sig) {
                var table = wasmTable;

                // Check if the function is already in the table, to ensure each function
                // gets a unique index. First, create the map if this is the first use.
                if (!functionsInTableMap) {
                    functionsInTableMap = new WeakMap();
                    for (var i = 0; i < table.length; i++) {
                        var item = table.get(i);
                        // Ignore null values.
                        if (item) {
                            functionsInTableMap.set(item, i);
                        }
                    }
                }
                if (functionsInTableMap.has(func)) {
                    return functionsInTableMap.get(func);
                }

                // It's not in the table, add it now.


                var ret;
                // Reuse a free index if there is one, otherwise grow.
                if (freeTableIndexes.length) {
                    ret = freeTableIndexes.pop();
                } else {
                    ret = table.length;
                    // Grow the table
                    try {
                        table.grow(1);
                    } catch (err) {
                        if (!(err instanceof RangeError)) {
                            throw err;
                        }
                        throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
                    }
                }

                // Set the new value.
                try {
                    // Attempting to call this with JS function will cause of table.set() to fail
                    table.set(ret, func);
                } catch (err) {
                    if (!(err instanceof TypeError)) {
                        throw err;
                    }
                    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction');
                    var wrapped = convertJsFunctionToWasm(func, sig);
                    table.set(ret, wrapped);
                }

                functionsInTableMap.set(func, ret);

                return ret;
            }

            function removeFunctionWasm(index) {
                functionsInTableMap.delete(wasmTable.get(index));
                freeTableIndexes.push(index);
            }

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
            function addFunction(func, sig) {
                assert(typeof func !== 'undefined');

                return addFunctionWasm(func, sig);
            }

            function removeFunction(index) {
                removeFunctionWasm(index);
            }









            function makeBigInt(low, high, unsigned) {
                return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
            }

            var tempRet0 = 0;

            var setTempRet0 = function(value) {
                tempRet0 = value;
            };

            var getTempRet0 = function() {
                return tempRet0;
            };

            function getCompilerSetting(name) {
                throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
            }

// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
            var GLOBAL_BASE = 1024;




// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


            var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) Object.defineProperty(Module, 'wasmBinary', { configurable: true, get: function() { abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
            var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) Object.defineProperty(Module, 'noExitRuntime', { configurable: true, get: function() { abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });


            if (typeof WebAssembly !== 'object') {
                abort('no native wasm support detected');
            }




// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

            /** @param {number} ptr
             @param {number} value
             @param {string} type
             @param {number|boolean=} noSafe */
            function setValue(ptr, value, type, noSafe) {
                type = type || 'i8';
                if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
                switch(type) {
                    case 'i1': HEAP8[((ptr)>>0)]=value; break;
                    case 'i8': HEAP8[((ptr)>>0)]=value; break;
                    case 'i16': HEAP16[((ptr)>>1)]=value; break;
                    case 'i32': HEAP32[((ptr)>>2)]=value; break;
                    case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
                    case 'float': HEAPF32[((ptr)>>2)]=value; break;
                    case 'double': HEAPF64[((ptr)>>3)]=value; break;
                    default: abort('invalid type for setValue: ' + type);
                }
            }

            /** @param {number} ptr
             @param {string} type
             @param {number|boolean=} noSafe */
            function getValue(ptr, type, noSafe) {
                type = type || 'i8';
                if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
                switch(type) {
                    case 'i1': return HEAP8[((ptr)>>0)];
                    case 'i8': return HEAP8[((ptr)>>0)];
                    case 'i16': return HEAP16[((ptr)>>1)];
                    case 'i32': return HEAP32[((ptr)>>2)];
                    case 'i64': return HEAP32[((ptr)>>2)];
                    case 'float': return HEAPF32[((ptr)>>2)];
                    case 'double': return HEAPF64[((ptr)>>3)];
                    default: abort('invalid type for getValue: ' + type);
                }
                return null;
            }






// Wasm globals

            var wasmMemory;
            var wasmTable;


//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
            var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
            var EXITSTATUS = 0;

            /** @type {function(*, string=)} */
            function assert(condition, text) {
                if (!condition) {
                    abort('Assertion failed: ' + text);
                }
            }

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
            function getCFunc(ident) {
                var func = Module['_' + ident]; // closure exported function
                assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
                return func;
            }

// C calling interface.
            /** @param {string|null=} returnType
             @param {Array=} argTypes
             @param {Arguments|Array=} args
             @param {Object=} opts */
            function ccall(ident, returnType, argTypes, args, opts) {
                // For fast lookup of conversion functions
                var toC = {
                    'string': function(str) {
                        var ret = 0;
                        if (str !== null && str !== undefined && str !== 0) { // null string
                            // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
                            var len = (str.length << 2) + 1;
                            ret = stackAlloc(len);
                            stringToUTF8(str, ret, len);
                        }
                        return ret;
                    },
                    'array': function(arr) {
                        var ret = stackAlloc(arr.length);
                        writeArrayToMemory(arr, ret);
                        return ret;
                    }
                };

                function convertReturnValue(ret) {
                    if (returnType === 'string') return UTF8ToString(ret);
                    if (returnType === 'boolean') return Boolean(ret);
                    return ret;
                }

                var func = getCFunc(ident);
                var cArgs = [];
                var stack = 0;
                assert(returnType !== 'array', 'Return type should not be "array".');
                if (args) {
                    for (var i = 0; i < args.length; i++) {
                        var converter = toC[argTypes[i]];
                        if (converter) {
                            if (stack === 0) stack = stackSave();
                            cArgs[i] = converter(args[i]);
                        } else {
                            cArgs[i] = args[i];
                        }
                    }
                }
                var ret = func.apply(null, cArgs);

                ret = convertReturnValue(ret);
                if (stack !== 0) stackRestore(stack);
                return ret;
            }

            /** @param {string=} returnType
             @param {Array=} argTypes
             @param {Object=} opts */
            function cwrap(ident, returnType, argTypes, opts) {
                return function() {
                    return ccall(ident, returnType, argTypes, arguments, opts);
                }
            }

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

            var ALLOC_NORMAL = 0; // Tries to use _malloc()
            var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
            /** @type {function((Uint8Array|Array<number>), number)} */
            function allocate(slab, allocator) {
                var ret;
                assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
                assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

                if (allocator == ALLOC_STACK) {
                    ret = stackAlloc(slab.length);
                } else {
                    ret = _malloc(slab.length);
                }

                if (slab.subarray || slab.slice) {
                    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
                } else {
                    HEAPU8.set(new Uint8Array(slab), ret);
                }
                return ret;
            }




// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

            var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

            /**
             * @param {number} idx
             * @param {number=} maxBytesToRead
             * @return {string}
             */
            function UTF8ArrayToString(heap, idx, maxBytesToRead) {
                var endIdx = idx + maxBytesToRead;
                var endPtr = idx;
                // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
                // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
                // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
                while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

                if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
                    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
                } else {
                    var str = '';
                    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
                    while (idx < endPtr) {
                        // For UTF8 byte structure, see:
                        // http://en.wikipedia.org/wiki/UTF-8#Description
                        // https://www.ietf.org/rfc/rfc2279.txt
                        // https://tools.ietf.org/html/rfc3629
                        var u0 = heap[idx++];
                        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
                        var u1 = heap[idx++] & 63;
                        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
                        var u2 = heap[idx++] & 63;
                        if ((u0 & 0xF0) == 0xE0) {
                            u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
                        } else {
                            if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!');
                            u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
                        }

                        if (u0 < 0x10000) {
                            str += String.fromCharCode(u0);
                        } else {
                            var ch = u0 - 0x10000;
                            str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
                        }
                    }
                }
                return str;
            }

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
            /**
             * @param {number} ptr
             * @param {number=} maxBytesToRead
             * @return {string}
             */
            function UTF8ToString(ptr, maxBytesToRead) {
                return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
            }

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

            function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
                if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
                    return 0;

                var startIdx = outIdx;
                var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
                for (var i = 0; i < str.length; ++i) {
                    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
                    // See http://unicode.org/faq/utf_bom.html#utf16-3
                    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
                    var u = str.charCodeAt(i); // possibly a lead surrogate
                    if (u >= 0xD800 && u <= 0xDFFF) {
                        var u1 = str.charCodeAt(++i);
                        u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
                    }
                    if (u <= 0x7F) {
                        if (outIdx >= endIdx) break;
                        heap[outIdx++] = u;
                    } else if (u <= 0x7FF) {
                        if (outIdx + 1 >= endIdx) break;
                        heap[outIdx++] = 0xC0 | (u >> 6);
                        heap[outIdx++] = 0x80 | (u & 63);
                    } else if (u <= 0xFFFF) {
                        if (outIdx + 2 >= endIdx) break;
                        heap[outIdx++] = 0xE0 | (u >> 12);
                        heap[outIdx++] = 0x80 | ((u >> 6) & 63);
                        heap[outIdx++] = 0x80 | (u & 63);
                    } else {
                        if (outIdx + 3 >= endIdx) break;
                        if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).');
                        heap[outIdx++] = 0xF0 | (u >> 18);
                        heap[outIdx++] = 0x80 | ((u >> 12) & 63);
                        heap[outIdx++] = 0x80 | ((u >> 6) & 63);
                        heap[outIdx++] = 0x80 | (u & 63);
                    }
                }
                // Null-terminate the pointer to the buffer.
                heap[outIdx] = 0;
                return outIdx - startIdx;
            }

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

            function stringToUTF8(str, outPtr, maxBytesToWrite) {
                assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
                return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
            }

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
            function lengthBytesUTF8(str) {
                var len = 0;
                for (var i = 0; i < str.length; ++i) {
                    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
                    // See http://unicode.org/faq/utf_bom.html#utf16-3
                    var u = str.charCodeAt(i); // possibly a lead surrogate
                    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
                    if (u <= 0x7F) ++len;
                    else if (u <= 0x7FF) len += 2;
                    else if (u <= 0xFFFF) len += 3;
                    else len += 4;
                }
                return len;
            }





// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

            function AsciiToString(ptr) {
                var str = '';
                while (1) {
                    var ch = HEAPU8[((ptr++)>>0)];
                    if (!ch) return str;
                    str += String.fromCharCode(ch);
                }
            }

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

            function stringToAscii(str, outPtr) {
                return writeAsciiToMemory(str, outPtr, false);
            }

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

            var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

            function UTF16ToString(ptr, maxBytesToRead) {
                assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
                var endPtr = ptr;
                // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
                // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
                var idx = endPtr >> 1;
                var maxIdx = idx + maxBytesToRead / 2;
                // If maxBytesToRead is not passed explicitly, it will be undefined, and this
                // will always evaluate to true. This saves on code size.
                while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
                endPtr = idx << 1;

                if (endPtr - ptr > 32 && UTF16Decoder) {
                    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
                } else {
                    var i = 0;

                    var str = '';
                    while (1) {
                        var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
                        if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
                        ++i;
                        // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
                        str += String.fromCharCode(codeUnit);
                    }
                }
            }

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

            function stringToUTF16(str, outPtr, maxBytesToWrite) {
                assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
                assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
                // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
                if (maxBytesToWrite === undefined) {
                    maxBytesToWrite = 0x7FFFFFFF;
                }
                if (maxBytesToWrite < 2) return 0;
                maxBytesToWrite -= 2; // Null terminator.
                var startPtr = outPtr;
                var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
                for (var i = 0; i < numCharsToWrite; ++i) {
                    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
                    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
                    HEAP16[((outPtr)>>1)]=codeUnit;
                    outPtr += 2;
                }
                // Null-terminate the pointer to the HEAP.
                HEAP16[((outPtr)>>1)]=0;
                return outPtr - startPtr;
            }

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

            function lengthBytesUTF16(str) {
                return str.length*2;
            }

            function UTF32ToString(ptr, maxBytesToRead) {
                assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
                var i = 0;

                var str = '';
                // If maxBytesToRead is not passed explicitly, it will be undefined, and this
                // will always evaluate to true. This saves on code size.
                while (!(i >= maxBytesToRead / 4)) {
                    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
                    if (utf32 == 0) break;
                    ++i;
                    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
                    // See http://unicode.org/faq/utf_bom.html#utf16-3
                    if (utf32 >= 0x10000) {
                        var ch = utf32 - 0x10000;
                        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
                    } else {
                        str += String.fromCharCode(utf32);
                    }
                }
                return str;
            }

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

            function stringToUTF32(str, outPtr, maxBytesToWrite) {
                assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
                assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
                // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
                if (maxBytesToWrite === undefined) {
                    maxBytesToWrite = 0x7FFFFFFF;
                }
                if (maxBytesToWrite < 4) return 0;
                var startPtr = outPtr;
                var endPtr = startPtr + maxBytesToWrite - 4;
                for (var i = 0; i < str.length; ++i) {
                    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
                    // See http://unicode.org/faq/utf_bom.html#utf16-3
                    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
                    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
                        var trailSurrogate = str.charCodeAt(++i);
                        codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
                    }
                    HEAP32[((outPtr)>>2)]=codeUnit;
                    outPtr += 4;
                    if (outPtr + 4 > endPtr) break;
                }
                // Null-terminate the pointer to the HEAP.
                HEAP32[((outPtr)>>2)]=0;
                return outPtr - startPtr;
            }

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

            function lengthBytesUTF32(str) {
                var len = 0;
                for (var i = 0; i < str.length; ++i) {
                    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
                    // See http://unicode.org/faq/utf_bom.html#utf16-3
                    var codeUnit = str.charCodeAt(i);
                    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
                    len += 4;
                }

                return len;
            }

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
            function allocateUTF8(str) {
                var size = lengthBytesUTF8(str) + 1;
                var ret = _malloc(size);
                if (ret) stringToUTF8Array(str, HEAP8, ret, size);
                return ret;
            }

// Allocate stack space for a JS string, and write it there.
            function allocateUTF8OnStack(str) {
                var size = lengthBytesUTF8(str) + 1;
                var ret = stackAlloc(size);
                stringToUTF8Array(str, HEAP8, ret, size);
                return ret;
            }

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
            /** @deprecated
             @param {boolean=} dontAddNull */
            function writeStringToMemory(string, buffer, dontAddNull) {
                warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

                var /** @type {number} */ lastChar, /** @type {number} */ end;
                if (dontAddNull) {
                    // stringToUTF8Array always appends null. If we don't want to do that, remember the
                    // character that existed at the location where the null will be placed, and restore
                    // that after the write (below).
                    end = buffer + lengthBytesUTF8(string);
                    lastChar = HEAP8[end];
                }
                stringToUTF8(string, buffer, Infinity);
                if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
            }

            function writeArrayToMemory(array, buffer) {
                assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
                HEAP8.set(array, buffer);
            }

            /** @param {boolean=} dontAddNull */
            function writeAsciiToMemory(str, buffer, dontAddNull) {
                for (var i = 0; i < str.length; ++i) {
                    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
                    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
                }
                // Null-terminate the pointer to the HEAP.
                if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
            }



// Memory management

            var PAGE_SIZE = 16384;
            var WASM_PAGE_SIZE = 65536;

            function alignUp(x, multiple) {
                if (x % multiple > 0) {
                    x += multiple - (x % multiple);
                }
                return x;
            }

            var HEAP,
                /** @type {ArrayBuffer} */
                buffer,
                /** @type {Int8Array} */
                HEAP8,
                /** @type {Uint8Array} */
                HEAPU8,
                /** @type {Int16Array} */
                HEAP16,
                /** @type {Uint16Array} */
                HEAPU16,
                /** @type {Int32Array} */
                HEAP32,
                /** @type {Uint32Array} */
                HEAPU32,
                /** @type {Float32Array} */
                HEAPF32,
                /** @type {Float64Array} */
                HEAPF64;

            function updateGlobalBufferAndViews(buf) {
                buffer = buf;
                Module['HEAP8'] = HEAP8 = new Int8Array(buf);
                Module['HEAP16'] = HEAP16 = new Int16Array(buf);
                Module['HEAP32'] = HEAP32 = new Int32Array(buf);
                Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
                Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
                Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
                Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
                Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
            }

            var STACK_BASE = 5285008,
                STACKTOP = STACK_BASE,
                STACK_MAX = 42128;

            assert(STACK_BASE % 16 === 0, 'stack must start aligned');



            var TOTAL_STACK = 5242880;
            if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

            var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) Object.defineProperty(Module, 'INITIAL_MEMORY', { configurable: true, get: function() { abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

            assert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
            assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
                'JS engine does not provide full typed array support');


// In non-standalone/normal mode, we create the memory here.



// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

            if (Module['wasmMemory']) {
                wasmMemory = Module['wasmMemory'];
            } else
            {
                wasmMemory = new WebAssembly.Memory({
                    'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
                    ,
                    'maximum': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
                });
            }


            if (wasmMemory) {
                buffer = wasmMemory.buffer;
            }

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
            INITIAL_INITIAL_MEMORY = buffer.byteLength;
            assert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);
            updateGlobalBufferAndViews(buffer);










// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
            function writeStackCookie() {
                assert((STACK_MAX & 3) == 0);
                // The stack grows downwards
                HEAPU32[(STACK_MAX >> 2)+1] = 0x2135467;
                HEAPU32[(STACK_MAX >> 2)+2] = 0x89BACDFE;
                // Also test the global address 0 for integrity.
                // We don't do this with ASan because ASan does its own checks for this.
                HEAP32[0] = 0x63736d65; /* 'emsc' */
            }

            function checkStackCookie() {
                var cookie1 = HEAPU32[(STACK_MAX >> 2)+1];
                var cookie2 = HEAPU32[(STACK_MAX >> 2)+2];
                if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
                    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
                }
                // Also test the global address 0 for integrity.
                // We don't do this with ASan because ASan does its own checks for this.
                if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
            }





// Endianness check (note: assumes compiler arch was little-endian)
            (function() {
                var h16 = new Int16Array(1);
                var h8 = new Int8Array(h16.buffer);
                h16[0] = 0x6373;
                if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';
            })();

            function abortFnPtrError(ptr, sig) {
                abort("Invalid function pointer " + ptr + " called with signature '" + sig + "'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.");
            }



            var __ATPRERUN__  = []; // functions called before the runtime is initialized
            var __ATINIT__    = []; // functions called during startup
            var __ATMAIN__    = []; // functions called when main() is to be run
            var __ATEXIT__    = []; // functions called during shutdown
            var __ATPOSTRUN__ = []; // functions called after the main() is called

            var runtimeInitialized = false;
            var runtimeExited = false;


            function preRun() {

                if (Module['preRun']) {
                    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
                    while (Module['preRun'].length) {
                        addOnPreRun(Module['preRun'].shift());
                    }
                }

                callRuntimeCallbacks(__ATPRERUN__);
            }

            function initRuntime() {
                checkStackCookie();
                assert(!runtimeInitialized);
                runtimeInitialized = true;

                callRuntimeCallbacks(__ATINIT__);
            }

            function preMain() {
                checkStackCookie();

                callRuntimeCallbacks(__ATMAIN__);
            }

            function exitRuntime() {
                checkStackCookie();
                runtimeExited = true;
            }

            function postRun() {
                checkStackCookie();

                if (Module['postRun']) {
                    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
                    while (Module['postRun'].length) {
                        addOnPostRun(Module['postRun'].shift());
                    }
                }

                callRuntimeCallbacks(__ATPOSTRUN__);
            }

            function addOnPreRun(cb) {
                __ATPRERUN__.unshift(cb);
            }

            function addOnInit(cb) {
                __ATINIT__.unshift(cb);
            }

            function addOnPreMain(cb) {
                __ATMAIN__.unshift(cb);
            }

            function addOnExit(cb) {
            }

            function addOnPostRun(cb) {
                __ATPOSTRUN__.unshift(cb);
            }




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

            assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
            assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
            assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
            assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

            var Math_abs = Math.abs;
            var Math_cos = Math.cos;
            var Math_sin = Math.sin;
            var Math_tan = Math.tan;
            var Math_acos = Math.acos;
            var Math_asin = Math.asin;
            var Math_atan = Math.atan;
            var Math_atan2 = Math.atan2;
            var Math_exp = Math.exp;
            var Math_log = Math.log;
            var Math_sqrt = Math.sqrt;
            var Math_ceil = Math.ceil;
            var Math_floor = Math.floor;
            var Math_pow = Math.pow;
            var Math_imul = Math.imul;
            var Math_fround = Math.fround;
            var Math_round = Math.round;
            var Math_min = Math.min;
            var Math_max = Math.max;
            var Math_clz32 = Math.clz32;
            var Math_trunc = Math.trunc;



// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
            var runDependencies = 0;
            var runDependencyWatcher = null;
            var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
            var runDependencyTracking = {};

            function getUniqueRunDependency(id) {
                var orig = id;
                while (1) {
                    if (!runDependencyTracking[id]) return id;
                    id = orig + Math.random();
                }
            }

            function addRunDependency(id) {
                runDependencies++;

                if (Module['monitorRunDependencies']) {
                    Module['monitorRunDependencies'](runDependencies);
                }

                if (id) {
                    assert(!runDependencyTracking[id]);
                    runDependencyTracking[id] = 1;
                    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
                        // Check for missing dependencies every few seconds
                        runDependencyWatcher = setInterval(function() {
                            if (ABORT) {
                                clearInterval(runDependencyWatcher);
                                runDependencyWatcher = null;
                                return;
                            }
                            var shown = false;
                            for (var dep in runDependencyTracking) {
                                if (!shown) {
                                    shown = true;
                                    err('still waiting on run dependencies:');
                                }
                                err('dependency: ' + dep);
                            }
                            if (shown) {
                                err('(end of list)');
                            }
                        }, 10000);
                    }
                } else {
                    err('warning: run dependency added without ID');
                }
            }

            function removeRunDependency(id) {
                runDependencies--;

                if (Module['monitorRunDependencies']) {
                    Module['monitorRunDependencies'](runDependencies);
                }

                if (id) {
                    assert(runDependencyTracking[id]);
                    delete runDependencyTracking[id];
                } else {
                    err('warning: run dependency removed without ID');
                }
                if (runDependencies == 0) {
                    if (runDependencyWatcher !== null) {
                        clearInterval(runDependencyWatcher);
                        runDependencyWatcher = null;
                    }
                    if (dependenciesFulfilled) {
                        var callback = dependenciesFulfilled;
                        dependenciesFulfilled = null;
                        callback(); // can add another dependenciesFulfilled
                    }
                }
            }

            Module["preloadedImages"] = {}; // maps url to image data
            Module["preloadedAudios"] = {}; // maps url to audio data

            /** @param {string|number=} what */
            function abort(what) {
                if (Module['onAbort']) {
                    Module['onAbort'](what);
                }

                what += '';
                err(what);

                ABORT = true;
                EXITSTATUS = 1;

                var output = 'abort(' + what + ') at ' + stackTrace();
                what = output;

                // Use a wasm runtime error, because a JS error might be seen as a foreign
                // exception, which means we'd run destructors on it. We need the error to
                // simply make the program stop.
                var e = new WebAssembly.RuntimeError(what);

                readyPromiseReject(e);
                // Throw the error whether or not MODULARIZE is set because abort is used
                // in code paths apart from instantiation where an exception is expected
                // to be thrown when abort is called.
                throw e;
            }

            var memoryInitializer = null;







// show errors on likely calls to FS when it was not included
            var FS = {
                error: function() {
                    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
                },
                init: function() { FS.error() },
                createDataFile: function() { FS.error() },
                createPreloadedFile: function() { FS.error() },
                createLazyFile: function() { FS.error() },
                open: function() { FS.error() },
                mkdev: function() { FS.error() },
                registerDevice: function() { FS.error() },
                analyzePath: function() { FS.error() },
                loadFilesFromDB: function() { FS.error() },

                ErrnoError: function ErrnoError() { FS.error() },
            };
            Module['FS_createDataFile'] = FS.createDataFile;
            Module['FS_createPreloadedFile'] = FS.createPreloadedFile;




            function hasPrefix(str, prefix) {
                return String.prototype.startsWith ?
                    str.startsWith(prefix) :
                    str.indexOf(prefix) === 0;
            }

// Prefix of data URIs emitted by SINGLE_FILE and related options.
            var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
            function isDataURI(filename) {
                return hasPrefix(filename, dataURIPrefix);
            }

            var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
            function isFileURI(filename) {
                return hasPrefix(filename, fileURIPrefix);
            }



            function createExportWrapper(name, fixedasm) {
                return function() {
                    var displayName = name;
                    var asm = fixedasm;
                    if (!fixedasm) {
                        asm = Module['asm'];
                    }
                    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
                    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
                    if (!asm[name]) {
                        assert(asm[name], 'exported native function `' + displayName + '` not found');
                    }
                    return asm[name].apply(null, arguments);
                };
            }


            var wasmBinaryFile = 'hcl.wasm';
            if (!isDataURI(wasmBinaryFile)) {
                wasmBinaryFile = locateFile(wasmBinaryFile);
            }

            function getBinary() {
                try {
                    if (wasmBinary) {
                        return new Uint8Array(wasmBinary);
                    }

                    if (readBinary) {
                        return readBinary(wasmBinaryFile);
                    } else {
                        throw "both async and sync fetching of the wasm failed";
                    }
                }
                catch (err) {
                    abort(err);
                }
            }

            function getBinaryPromise() {
                // If we don't have the binary yet, and have the Fetch api, use that;
                // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
                if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
                ) {
                    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
                        if (!response['ok']) {
                            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                        }
                        return response['arrayBuffer']();
                    }).catch(function () {
                        return getBinary();
                    });
                }
                // Otherwise, getBinary should be able to get it synchronously
                return Promise.resolve().then(getBinary);
            }



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
            function createWasm() {
                // prepare imports
                var info = {
                    'env': asmLibraryArg,
                    'wasi_snapshot_preview1': asmLibraryArg
                };
                // Load the wasm module and create an instance of using native support in the JS engine.
                // handle a generated wasm instance, receiving its exports and
                // performing other necessary setup
                /** @param {WebAssembly.Module=} module*/
                function receiveInstance(instance, module) {
                    var exports = instance.exports;




                    Module['asm'] = exports;

                    wasmTable = Module['asm']['__indirect_function_table'];
                    assert(wasmTable, "table not found in wasm exports");


                    removeRunDependency('wasm-instantiate');
                }
                // we can't run yet (except in a pthread, where we have a custom sync instantiator)
                addRunDependency('wasm-instantiate');


                // Async compilation can be confusing when an error on the page overwrites Module
                // (for example, if the order of elements is wrong, and the one defining Module is
                // later), so we save Module and check it later.
                var trueModule = Module;
                function receiveInstantiatedSource(output) {
                    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
                    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
                    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
                    trueModule = null;
                    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
                    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
                    receiveInstance(output['instance']);
                }


                function instantiateArrayBuffer(receiver) {
                    return getBinaryPromise().then(function(binary) {
                        return WebAssembly.instantiate(binary, info);
                    }).then(receiver, function(reason) {
                        err('failed to asynchronously prepare wasm: ' + reason);


                        abort(reason);
                    });
                }

                // Prefer streaming instantiation if available.
                function instantiateAsync() {
                    if (!wasmBinary &&
                        typeof WebAssembly.instantiateStreaming === 'function' &&
                        !isDataURI(wasmBinaryFile) &&
                        typeof fetch === 'function') {
                        fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
                            var result = WebAssembly.instantiateStreaming(response, info);
                            return result.then(receiveInstantiatedSource, function(reason) {
                                // We expect the most common failure cause to be a bad MIME type for the binary,
                                // in which case falling back to ArrayBuffer instantiation should work.
                                err('wasm streaming compile failed: ' + reason);
                                err('falling back to ArrayBuffer instantiation');
                                return instantiateArrayBuffer(receiveInstantiatedSource);
                            });
                        });
                    } else {
                        return instantiateArrayBuffer(receiveInstantiatedSource);
                    }
                }
                // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
                // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
                // to any other async startup actions they are performing.
                if (Module['instantiateWasm']) {
                    try {
                        var exports = Module['instantiateWasm'](info, receiveInstance);
                        return exports;
                    } catch(e) {
                        err('Module.instantiateWasm callback failed with error: ' + e);
                        return false;
                    }
                }

                instantiateAsync();
                return {}; // no exports yet; we'll fill them in later
            }

// Globals used by JS i64 conversions
            var tempDouble;
            var tempI64;

// === Body ===

            var ASM_CONSTS = {

            };





// {{PRE_LIBRARY}}


            function abortStackOverflow(allocSize) {
                abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - stackSave() + allocSize) + ' bytes available!');
            }

            function callRuntimeCallbacks(callbacks) {
                while(callbacks.length > 0) {
                    var callback = callbacks.shift();
                    if (typeof callback == 'function') {
                        callback(Module); // Pass the module as the first argument.
                        continue;
                    }
                    var func = callback.func;
                    if (typeof func === 'number') {
                        if (callback.arg === undefined) {
                            wasmTable.get(func)();
                        } else {
                            wasmTable.get(func)(callback.arg);
                        }
                    } else {
                        func(callback.arg === undefined ? null : callback.arg);
                    }
                }
            }

            function demangle(func) {
                warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
                return func;
            }

            function demangleAll(text) {
                var regex =
                    /\b_Z[\w\d_]+/g;
                return text.replace(regex,
                    function(x) {
                        var y = demangle(x);
                        return x === y ? x : (y + ' [' + x + ']');
                    });
            }

            function dynCallLegacy(sig, ptr, args) {
                assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
                if (args && args.length) {
                    // j (64-bit integer) must be passed in as two numbers [low 32, high 32].
                    assert(args.length === sig.substring(1).replace(/j/g, '--').length);
                } else {
                    assert(sig.length == 1);
                }
                if (args && args.length) {
                    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
                }
                return Module['dynCall_' + sig].call(null, ptr);
            }
            function dynCall(sig, ptr, args) {
                // Without WASM_BIGINT support we cannot directly call function with i64 as
                // part of thier signature, so we rely the dynCall functions generated by
                // wasm-emscripten-finalize
                if (sig.indexOf('j') != -1) {
                    return dynCallLegacy(sig, ptr, args);
                }

                return wasmTable.get(ptr).apply(null, args)
            }

            function jsStackTrace() {
                var error = new Error();
                if (!error.stack) {
                    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
                    // so try that as a special-case.
                    try {
                        throw new Error();
                    } catch(e) {
                        error = e;
                    }
                    if (!error.stack) {
                        return '(no stack trace available)';
                    }
                }
                return error.stack.toString();
            }

            function stackTrace() {
                var js = jsStackTrace();
                if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
                return demangleAll(js);
            }

            var ExceptionInfoAttrs={DESTRUCTOR_OFFSET:0,REFCOUNT_OFFSET:4,TYPE_OFFSET:8,CAUGHT_OFFSET:12,RETHROWN_OFFSET:13,SIZE:16};
            function ___cxa_allocate_exception(size) {
                // Thrown object is prepended by exception metadata block
                return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
            }

            function _atexit(func, arg) {
            }
            function ___cxa_atexit(a0,a1
            ) {
                return _atexit(a0,a1);
            }

            var exceptionLast=0;

            function ExceptionInfo(excPtr) {
                this.excPtr = excPtr;
                this.ptr = excPtr - ExceptionInfoAttrs.SIZE;

                this.set_type = function(type) {
                    HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)]=type;
                };

                this.get_type = function() {
                    return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)];
                };

                this.set_destructor = function(destructor) {
                    HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)]=destructor;
                };

                this.get_destructor = function() {
                    return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)];
                };

                this.set_refcount = function(refcount) {
                    HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=refcount;
                };

                this.set_caught = function (caught) {
                    caught = caught ? 1 : 0;
                    HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)]=caught;
                };

                this.get_caught = function () {
                    return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)] != 0;
                };

                this.set_rethrown = function (rethrown) {
                    rethrown = rethrown ? 1 : 0;
                    HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)]=rethrown;
                };

                this.get_rethrown = function () {
                    return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)] != 0;
                };

                // Initialize native structure fields. Should be called once after allocated.
                this.init = function(type, destructor) {
                    this.set_type(type);
                    this.set_destructor(destructor);
                    this.set_refcount(0);
                    this.set_caught(false);
                    this.set_rethrown(false);
                }

                this.add_ref = function() {
                    var value = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
                    HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=value + 1;
                };

                // Returns true if last reference released.
                this.release_ref = function() {
                    var prev = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
                    HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=prev - 1;
                    assert(prev > 0);
                    return prev === 1;
                };
            }

            function CatchInfo(ptr) {

                this.free = function() {
                    _free(this.ptr);
                    this.ptr = 0;
                };

                this.set_base_ptr = function(basePtr) {
                    HEAP32[((this.ptr)>>2)]=basePtr;
                };

                this.get_base_ptr = function() {
                    return HEAP32[((this.ptr)>>2)];
                };

                this.set_adjusted_ptr = function(adjustedPtr) {
                    var ptrSize = 4;
                    HEAP32[(((this.ptr)+(ptrSize))>>2)]=adjustedPtr;
                };

                this.get_adjusted_ptr = function() {
                    var ptrSize = 4;
                    return HEAP32[(((this.ptr)+(ptrSize))>>2)];
                };

                // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
                // when the pointer is casted to some of the exception object base classes (e.g. when virtual
                // inheritance is used). When a pointer is thrown this method should return the thrown pointer
                // itself.
                this.get_exception_ptr = function() {
                    // Work around a fastcomp bug, this code is still included for some reason in a build without
                    // exceptions support.
                    var isPointer = ___cxa_is_pointer_type(
                        this.get_exception_info().get_type());
                    if (isPointer) {
                        return HEAP32[((this.get_base_ptr())>>2)];
                    }
                    var adjusted = this.get_adjusted_ptr();
                    if (adjusted !== 0) return adjusted;
                    return this.get_base_ptr();
                };

                this.get_exception_info = function() {
                    return new ExceptionInfo(this.get_base_ptr());
                };

                if (ptr === undefined) {
                    this.ptr = _malloc(8);
                    this.set_adjusted_ptr(0);
                } else {
                    this.ptr = ptr;
                }
            }

            function ___resumeException(catchInfoPtr) {
                var catchInfo = new CatchInfo(catchInfoPtr);
                var ptr = catchInfo.get_base_ptr();
                if (!exceptionLast) { exceptionLast = ptr; }
                catchInfo.free();
                throw ptr;
            }
            function ___cxa_find_matching_catch_2() {
                var thrown = exceptionLast;
                if (!thrown) {
                    // just pass through the null ptr
                    return ((setTempRet0(0),0)|0);
                }
                var info = new ExceptionInfo(thrown);
                var thrownType = info.get_type();
                var catchInfo = new CatchInfo();
                catchInfo.set_base_ptr(thrown);
                if (!thrownType) {
                    // just pass through the thrown ptr
                    return ((setTempRet0(0),catchInfo.ptr)|0);
                }
                var typeArray = Array.prototype.slice.call(arguments);

                // can_catch receives a **, add indirection
                var stackTop = stackSave();
                var exceptionThrowBuf = stackAlloc(4);
                HEAP32[((exceptionThrowBuf)>>2)]=thrown;
                // The different catch blocks are denoted by different types.
                // Due to inheritance, those types may not precisely match the
                // type of the thrown object. Find one which matches, and
                // return the type of the catch block which should be called.
                for (var i = 0; i < typeArray.length; i++) {
                    var caughtType = typeArray[i];
                    if (caughtType === 0 || caughtType === thrownType) {
                        // Catch all clause matched or exactly the same type is caught
                        break;
                    }
                    if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
                        var adjusted = HEAP32[((exceptionThrowBuf)>>2)];
                        if (thrown !== adjusted) {
                            catchInfo.set_adjusted_ptr(adjusted);
                        }
                        return ((setTempRet0(caughtType),catchInfo.ptr)|0);
                    }
                }
                stackRestore(stackTop);
                return ((setTempRet0(thrownType),catchInfo.ptr)|0);
            }

            function ___cxa_free_exception(ptr) {
                try {
                    return _free(new ExceptionInfo(ptr).ptr);
                } catch(e) {
                    err('exception during cxa_free_exception: ' + e);
                }
            }

            function ___cxa_throw(ptr, type, destructor) {
                var info = new ExceptionInfo(ptr);
                // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
                info.init(type, destructor);
                exceptionLast = ptr;
                if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
                    __ZSt18uncaught_exceptionv.uncaught_exceptions = 1;
                } else {
                    __ZSt18uncaught_exceptionv.uncaught_exceptions++;
                }
                throw ptr;
            }

            function ___cxa_uncaught_exceptions() {
                return __ZSt18uncaught_exceptionv.uncaught_exceptions;
            }


            function getShiftFromSize(size) {
                switch (size) {
                    case 1: return 0;
                    case 2: return 1;
                    case 4: return 2;
                    case 8: return 3;
                    default:
                        throw new TypeError('Unknown type size: ' + size);
                }
            }

            function embind_init_charCodes() {
                var codes = new Array(256);
                for (var i = 0; i < 256; ++i) {
                    codes[i] = String.fromCharCode(i);
                }
                embind_charCodes = codes;
            }
            var embind_charCodes=undefined;
            function readLatin1String(ptr) {
                var ret = "";
                var c = ptr;
                while (HEAPU8[c]) {
                    ret += embind_charCodes[HEAPU8[c++]];
                }
                return ret;
            }

            var awaitingDependencies={};

            var registeredTypes={};

            var typeDependencies={};

            var char_0=48;

            var char_9=57;
            function makeLegalFunctionName(name) {
                if (undefined === name) {
                    return '_unknown';
                }
                name = name.replace(/[^a-zA-Z0-9_]/g, '$');
                var f = name.charCodeAt(0);
                if (f >= char_0 && f <= char_9) {
                    return '_' + name;
                } else {
                    return name;
                }
            }
            function createNamedFunction(name, body) {
                name = makeLegalFunctionName(name);
                /*jshint evil:true*/
                return new Function(
                    "body",
                    "return function " + name + "() {\n" +
                    "    \"use strict\";" +
                    "    return body.apply(this, arguments);\n" +
                    "};\n"
                )(body);
            }
            function extendError(baseErrorType, errorName) {
                var errorClass = createNamedFunction(errorName, function(message) {
                    this.name = errorName;
                    this.message = message;

                    var stack = (new Error(message)).stack;
                    if (stack !== undefined) {
                        this.stack = this.toString() + '\n' +
                            stack.replace(/^Error(:[^\n]*)?\n/, '');
                    }
                });
                errorClass.prototype = Object.create(baseErrorType.prototype);
                errorClass.prototype.constructor = errorClass;
                errorClass.prototype.toString = function() {
                    if (this.message === undefined) {
                        return this.name;
                    } else {
                        return this.name + ': ' + this.message;
                    }
                };

                return errorClass;
            }
            var BindingError=undefined;
            function throwBindingError(message) {
                throw new BindingError(message);
            }

            var InternalError=undefined;
            function throwInternalError(message) {
                throw new InternalError(message);
            }
            function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
                myTypes.forEach(function(type) {
                    typeDependencies[type] = dependentTypes;
                });

                function onComplete(typeConverters) {
                    var myTypeConverters = getTypeConverters(typeConverters);
                    if (myTypeConverters.length !== myTypes.length) {
                        throwInternalError('Mismatched type converter count');
                    }
                    for (var i = 0; i < myTypes.length; ++i) {
                        registerType(myTypes[i], myTypeConverters[i]);
                    }
                }

                var typeConverters = new Array(dependentTypes.length);
                var unregisteredTypes = [];
                var registered = 0;
                dependentTypes.forEach(function(dt, i) {
                    if (registeredTypes.hasOwnProperty(dt)) {
                        typeConverters[i] = registeredTypes[dt];
                    } else {
                        unregisteredTypes.push(dt);
                        if (!awaitingDependencies.hasOwnProperty(dt)) {
                            awaitingDependencies[dt] = [];
                        }
                        awaitingDependencies[dt].push(function() {
                            typeConverters[i] = registeredTypes[dt];
                            ++registered;
                            if (registered === unregisteredTypes.length) {
                                onComplete(typeConverters);
                            }
                        });
                    }
                });
                if (0 === unregisteredTypes.length) {
                    onComplete(typeConverters);
                }
            }
            /** @param {Object=} options */
            function registerType(rawType, registeredInstance, options) {
                options = options || {};

                if (!('argPackAdvance' in registeredInstance)) {
                    throw new TypeError('registerType registeredInstance requires argPackAdvance');
                }

                var name = registeredInstance.name;
                if (!rawType) {
                    throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
                }
                if (registeredTypes.hasOwnProperty(rawType)) {
                    if (options.ignoreDuplicateRegistrations) {
                        return;
                    } else {
                        throwBindingError("Cannot register type '" + name + "' twice");
                    }
                }

                registeredTypes[rawType] = registeredInstance;
                delete typeDependencies[rawType];

                if (awaitingDependencies.hasOwnProperty(rawType)) {
                    var callbacks = awaitingDependencies[rawType];
                    delete awaitingDependencies[rawType];
                    callbacks.forEach(function(cb) {
                        cb();
                    });
                }
            }
            function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
                var shift = getShiftFromSize(size);

                name = readLatin1String(name);
                registerType(rawType, {
                    name: name,
                    'fromWireType': function(wt) {
                        // ambiguous emscripten ABI: sometimes return values are
                        // true or false, and sometimes integers (0 or 1)
                        return !!wt;
                    },
                    'toWireType': function(destructors, o) {
                        return o ? trueValue : falseValue;
                    },
                    'argPackAdvance': 8,
                    'readValueFromPointer': function(pointer) {
                        // TODO: if heap is fixed (like in asm.js) this could be executed outside
                        var heap;
                        if (size === 1) {
                            heap = HEAP8;
                        } else if (size === 2) {
                            heap = HEAP16;
                        } else if (size === 4) {
                            heap = HEAP32;
                        } else {
                            throw new TypeError("Unknown boolean type size: " + name);
                        }
                        return this['fromWireType'](heap[pointer >> shift]);
                    },
                    destructorFunction: null, // This type does not need a destructor
                });
            }

            function ClassHandle_isAliasOf(other) {
                if (!(this instanceof ClassHandle)) {
                    return false;
                }
                if (!(other instanceof ClassHandle)) {
                    return false;
                }

                var leftClass = this.$$.ptrType.registeredClass;
                var left = this.$$.ptr;
                var rightClass = other.$$.ptrType.registeredClass;
                var right = other.$$.ptr;

                while (leftClass.baseClass) {
                    left = leftClass.upcast(left);
                    leftClass = leftClass.baseClass;
                }

                while (rightClass.baseClass) {
                    right = rightClass.upcast(right);
                    rightClass = rightClass.baseClass;
                }

                return leftClass === rightClass && left === right;
            }

            function shallowCopyInternalPointer(o) {
                return {
                    count: o.count,
                    deleteScheduled: o.deleteScheduled,
                    preservePointerOnDelete: o.preservePointerOnDelete,
                    ptr: o.ptr,
                    ptrType: o.ptrType,
                    smartPtr: o.smartPtr,
                    smartPtrType: o.smartPtrType,
                };
            }

            function throwInstanceAlreadyDeleted(obj) {
                function getInstanceTypeName(handle) {
                    return handle.$$.ptrType.registeredClass.name;
                }
                throwBindingError(getInstanceTypeName(obj) + ' instance already deleted');
            }

            var finalizationGroup=false;

            function detachFinalizer(handle) {}

            function runDestructor($$) {
                if ($$.smartPtr) {
                    $$.smartPtrType.rawDestructor($$.smartPtr);
                } else {
                    $$.ptrType.registeredClass.rawDestructor($$.ptr);
                }
            }
            function releaseClassHandle($$) {
                $$.count.value -= 1;
                var toDelete = 0 === $$.count.value;
                if (toDelete) {
                    runDestructor($$);
                }
            }
            function attachFinalizer(handle) {
                if ('undefined' === typeof FinalizationGroup) {
                    attachFinalizer = function (handle) { return handle; };
                    return handle;
                }
                // If the running environment has a FinalizationGroup (see
                // https://github.com/tc39/proposal-weakrefs), then attach finalizers
                // for class handles.  We check for the presence of FinalizationGroup
                // at run-time, not build-time.
                finalizationGroup = new FinalizationGroup(function (iter) {
                    for (var result = iter.next(); !result.done; result = iter.next()) {
                        var $$ = result.value;
                        if (!$$.ptr) {
                            console.warn('object already deleted: ' + $$.ptr);
                        } else {
                            releaseClassHandle($$);
                        }
                    }
                });
                attachFinalizer = function(handle) {
                    finalizationGroup.register(handle, handle.$$, handle.$$);
                    return handle;
                };
                detachFinalizer = function(handle) {
                    finalizationGroup.unregister(handle.$$);
                };
                return attachFinalizer(handle);
            }
            function ClassHandle_clone() {
                if (!this.$$.ptr) {
                    throwInstanceAlreadyDeleted(this);
                }

                if (this.$$.preservePointerOnDelete) {
                    this.$$.count.value += 1;
                    return this;
                } else {
                    var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
                        $$: {
                            value: shallowCopyInternalPointer(this.$$),
                        }
                    }));

                    clone.$$.count.value += 1;
                    clone.$$.deleteScheduled = false;
                    return clone;
                }
            }

            function ClassHandle_delete() {
                if (!this.$$.ptr) {
                    throwInstanceAlreadyDeleted(this);
                }

                if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
                    throwBindingError('Object already scheduled for deletion');
                }

                detachFinalizer(this);
                releaseClassHandle(this.$$);

                if (!this.$$.preservePointerOnDelete) {
                    this.$$.smartPtr = undefined;
                    this.$$.ptr = undefined;
                }
            }

            function ClassHandle_isDeleted() {
                return !this.$$.ptr;
            }

            var delayFunction=undefined;

            var deletionQueue=[];

            function flushPendingDeletes() {
                while (deletionQueue.length) {
                    var obj = deletionQueue.pop();
                    obj.$$.deleteScheduled = false;
                    obj['delete']();
                }
            }
            function ClassHandle_deleteLater() {
                if (!this.$$.ptr) {
                    throwInstanceAlreadyDeleted(this);
                }
                if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
                    throwBindingError('Object already scheduled for deletion');
                }
                deletionQueue.push(this);
                if (deletionQueue.length === 1 && delayFunction) {
                    delayFunction(flushPendingDeletes);
                }
                this.$$.deleteScheduled = true;
                return this;
            }
            function init_ClassHandle() {
                ClassHandle.prototype['isAliasOf'] = ClassHandle_isAliasOf;
                ClassHandle.prototype['clone'] = ClassHandle_clone;
                ClassHandle.prototype['delete'] = ClassHandle_delete;
                ClassHandle.prototype['isDeleted'] = ClassHandle_isDeleted;
                ClassHandle.prototype['deleteLater'] = ClassHandle_deleteLater;
            }
            function ClassHandle() {
            }

            var registeredPointers={};

            function ensureOverloadTable(proto, methodName, humanName) {
                if (undefined === proto[methodName].overloadTable) {
                    var prevFunc = proto[methodName];
                    // Inject an overload resolver function that routes to the appropriate overload based on the number of arguments.
                    proto[methodName] = function() {
                        // TODO This check can be removed in -O3 level "unsafe" optimizations.
                        if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                            throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
                        }
                        return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
                    };
                    // Move the previous function into the overload table.
                    proto[methodName].overloadTable = [];
                    proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
                }
            }
            /** @param {number=} numArguments */
            function exposePublicSymbol(name, value, numArguments) {
                if (Module.hasOwnProperty(name)) {
                    if (undefined === numArguments || (undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments])) {
                        throwBindingError("Cannot register public name '" + name + "' twice");
                    }

                    // We are exposing a function with the same name as an existing function. Create an overload table and a function selector
                    // that routes between the two.
                    ensureOverloadTable(Module, name, name);
                    if (Module.hasOwnProperty(numArguments)) {
                        throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
                    }
                    // Add the new function into the overload table.
                    Module[name].overloadTable[numArguments] = value;
                }
                else {
                    Module[name] = value;
                    if (undefined !== numArguments) {
                        Module[name].numArguments = numArguments;
                    }
                }
            }

            /** @constructor */
            function RegisteredClass(
                name,
                constructor,
                instancePrototype,
                rawDestructor,
                baseClass,
                getActualType,
                upcast,
                downcast
            ) {
                this.name = name;
                this.constructor = constructor;
                this.instancePrototype = instancePrototype;
                this.rawDestructor = rawDestructor;
                this.baseClass = baseClass;
                this.getActualType = getActualType;
                this.upcast = upcast;
                this.downcast = downcast;
                this.pureVirtualFunctions = [];
            }

            function upcastPointer(ptr, ptrClass, desiredClass) {
                while (ptrClass !== desiredClass) {
                    if (!ptrClass.upcast) {
                        throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
                    }
                    ptr = ptrClass.upcast(ptr);
                    ptrClass = ptrClass.baseClass;
                }
                return ptr;
            }
            function constNoSmartPtrRawPointerToWireType(destructors, handle) {
                if (handle === null) {
                    if (this.isReference) {
                        throwBindingError('null is not a valid ' + this.name);
                    }
                    return 0;
                }

                if (!handle.$$) {
                    throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
                }
                if (!handle.$$.ptr) {
                    throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
                }
                var handleClass = handle.$$.ptrType.registeredClass;
                var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
                return ptr;
            }

            function genericPointerToWireType(destructors, handle) {
                var ptr;
                if (handle === null) {
                    if (this.isReference) {
                        throwBindingError('null is not a valid ' + this.name);
                    }

                    if (this.isSmartPointer) {
                        ptr = this.rawConstructor();
                        if (destructors !== null) {
                            destructors.push(this.rawDestructor, ptr);
                        }
                        return ptr;
                    } else {
                        return 0;
                    }
                }

                if (!handle.$$) {
                    throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
                }
                if (!handle.$$.ptr) {
                    throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
                }
                if (!this.isConst && handle.$$.ptrType.isConst) {
                    throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
                }
                var handleClass = handle.$$.ptrType.registeredClass;
                ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);

                if (this.isSmartPointer) {
                    // TODO: this is not strictly true
                    // We could support BY_EMVAL conversions from raw pointers to smart pointers
                    // because the smart pointer can hold a reference to the handle
                    if (undefined === handle.$$.smartPtr) {
                        throwBindingError('Passing raw pointer to smart pointer is illegal');
                    }

                    switch (this.sharingPolicy) {
                        case 0: // NONE
                            // no upcasting
                            if (handle.$$.smartPtrType === this) {
                                ptr = handle.$$.smartPtr;
                            } else {
                                throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
                            }
                            break;

                        case 1: // INTRUSIVE
                            ptr = handle.$$.smartPtr;
                            break;

                        case 2: // BY_EMVAL
                            if (handle.$$.smartPtrType === this) {
                                ptr = handle.$$.smartPtr;
                            } else {
                                var clonedHandle = handle['clone']();
                                ptr = this.rawShare(
                                    ptr,
                                    __emval_register(function() {
                                        clonedHandle['delete']();
                                    })
                                );
                                if (destructors !== null) {
                                    destructors.push(this.rawDestructor, ptr);
                                }
                            }
                            break;

                        default:
                            throwBindingError('Unsupporting sharing policy');
                    }
                }
                return ptr;
            }

            function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
                if (handle === null) {
                    if (this.isReference) {
                        throwBindingError('null is not a valid ' + this.name);
                    }
                    return 0;
                }

                if (!handle.$$) {
                    throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
                }
                if (!handle.$$.ptr) {
                    throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
                }
                if (handle.$$.ptrType.isConst) {
                    throwBindingError('Cannot convert argument of type ' + handle.$$.ptrType.name + ' to parameter type ' + this.name);
                }
                var handleClass = handle.$$.ptrType.registeredClass;
                var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
                return ptr;
            }

            function simpleReadValueFromPointer(pointer) {
                return this['fromWireType'](HEAPU32[pointer >> 2]);
            }

            function RegisteredPointer_getPointee(ptr) {
                if (this.rawGetPointee) {
                    ptr = this.rawGetPointee(ptr);
                }
                return ptr;
            }

            function RegisteredPointer_destructor(ptr) {
                if (this.rawDestructor) {
                    this.rawDestructor(ptr);
                }
            }

            function RegisteredPointer_deleteObject(handle) {
                if (handle !== null) {
                    handle['delete']();
                }
            }

            function downcastPointer(ptr, ptrClass, desiredClass) {
                if (ptrClass === desiredClass) {
                    return ptr;
                }
                if (undefined === desiredClass.baseClass) {
                    return null; // no conversion
                }

                var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
                if (rv === null) {
                    return null;
                }
                return desiredClass.downcast(rv);
            }

            function getInheritedInstanceCount() {
                return Object.keys(registeredInstances).length;
            }

            function getLiveInheritedInstances() {
                var rv = [];
                for (var k in registeredInstances) {
                    if (registeredInstances.hasOwnProperty(k)) {
                        rv.push(registeredInstances[k]);
                    }
                }
                return rv;
            }

            function setDelayFunction(fn) {
                delayFunction = fn;
                if (deletionQueue.length && delayFunction) {
                    delayFunction(flushPendingDeletes);
                }
            }
            function init_embind() {
                Module['getInheritedInstanceCount'] = getInheritedInstanceCount;
                Module['getLiveInheritedInstances'] = getLiveInheritedInstances;
                Module['flushPendingDeletes'] = flushPendingDeletes;
                Module['setDelayFunction'] = setDelayFunction;
            }
            var registeredInstances={};

            function getBasestPointer(class_, ptr) {
                if (ptr === undefined) {
                    throwBindingError('ptr should not be undefined');
                }
                while (class_.baseClass) {
                    ptr = class_.upcast(ptr);
                    class_ = class_.baseClass;
                }
                return ptr;
            }
            function getInheritedInstance(class_, ptr) {
                ptr = getBasestPointer(class_, ptr);
                return registeredInstances[ptr];
            }

            function makeClassHandle(prototype, record) {
                if (!record.ptrType || !record.ptr) {
                    throwInternalError('makeClassHandle requires ptr and ptrType');
                }
                var hasSmartPtrType = !!record.smartPtrType;
                var hasSmartPtr = !!record.smartPtr;
                if (hasSmartPtrType !== hasSmartPtr) {
                    throwInternalError('Both smartPtrType and smartPtr must be specified');
                }
                record.count = { value: 1 };
                return attachFinalizer(Object.create(prototype, {
                    $$: {
                        value: record,
                    },
                }));
            }
            function RegisteredPointer_fromWireType(ptr) {
                // ptr is a raw pointer (or a raw smartpointer)

                // rawPointer is a maybe-null raw pointer
                var rawPointer = this.getPointee(ptr);
                if (!rawPointer) {
                    this.destructor(ptr);
                    return null;
                }

                var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
                if (undefined !== registeredInstance) {
                    // JS object has been neutered, time to repopulate it
                    if (0 === registeredInstance.$$.count.value) {
                        registeredInstance.$$.ptr = rawPointer;
                        registeredInstance.$$.smartPtr = ptr;
                        return registeredInstance['clone']();
                    } else {
                        // else, just increment reference count on existing object
                        // it already has a reference to the smart pointer
                        var rv = registeredInstance['clone']();
                        this.destructor(ptr);
                        return rv;
                    }
                }

                function makeDefaultHandle() {
                    if (this.isSmartPointer) {
                        return makeClassHandle(this.registeredClass.instancePrototype, {
                            ptrType: this.pointeeType,
                            ptr: rawPointer,
                            smartPtrType: this,
                            smartPtr: ptr,
                        });
                    } else {
                        return makeClassHandle(this.registeredClass.instancePrototype, {
                            ptrType: this,
                            ptr: ptr,
                        });
                    }
                }

                var actualType = this.registeredClass.getActualType(rawPointer);
                var registeredPointerRecord = registeredPointers[actualType];
                if (!registeredPointerRecord) {
                    return makeDefaultHandle.call(this);
                }

                var toType;
                if (this.isConst) {
                    toType = registeredPointerRecord.constPointerType;
                } else {
                    toType = registeredPointerRecord.pointerType;
                }
                var dp = downcastPointer(
                    rawPointer,
                    this.registeredClass,
                    toType.registeredClass);
                if (dp === null) {
                    return makeDefaultHandle.call(this);
                }
                if (this.isSmartPointer) {
                    return makeClassHandle(toType.registeredClass.instancePrototype, {
                        ptrType: toType,
                        ptr: dp,
                        smartPtrType: this,
                        smartPtr: ptr,
                    });
                } else {
                    return makeClassHandle(toType.registeredClass.instancePrototype, {
                        ptrType: toType,
                        ptr: dp,
                    });
                }
            }
            function init_RegisteredPointer() {
                RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
                RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
                RegisteredPointer.prototype['argPackAdvance'] = 8;
                RegisteredPointer.prototype['readValueFromPointer'] = simpleReadValueFromPointer;
                RegisteredPointer.prototype['deleteObject'] = RegisteredPointer_deleteObject;
                RegisteredPointer.prototype['fromWireType'] = RegisteredPointer_fromWireType;
            }
            /** @constructor
             @param {*=} pointeeType,
             @param {*=} sharingPolicy,
             @param {*=} rawGetPointee,
             @param {*=} rawConstructor,
             @param {*=} rawShare,
             @param {*=} rawDestructor,
             */
            function RegisteredPointer(
                name,
                registeredClass,
                isReference,
                isConst,

                // smart pointer properties
                isSmartPointer,
                pointeeType,
                sharingPolicy,
                rawGetPointee,
                rawConstructor,
                rawShare,
                rawDestructor
            ) {
                this.name = name;
                this.registeredClass = registeredClass;
                this.isReference = isReference;
                this.isConst = isConst;

                // smart pointer properties
                this.isSmartPointer = isSmartPointer;
                this.pointeeType = pointeeType;
                this.sharingPolicy = sharingPolicy;
                this.rawGetPointee = rawGetPointee;
                this.rawConstructor = rawConstructor;
                this.rawShare = rawShare;
                this.rawDestructor = rawDestructor;

                if (!isSmartPointer && registeredClass.baseClass === undefined) {
                    if (isConst) {
                        this['toWireType'] = constNoSmartPtrRawPointerToWireType;
                        this.destructorFunction = null;
                    } else {
                        this['toWireType'] = nonConstNoSmartPtrRawPointerToWireType;
                        this.destructorFunction = null;
                    }
                } else {
                    this['toWireType'] = genericPointerToWireType;
                    // Here we must leave this.destructorFunction undefined, since whether genericPointerToWireType returns
                    // a pointer that needs to be freed up is runtime-dependent, and cannot be evaluated at registration time.
                    // TODO: Create an alternative mechanism that allows removing the use of var destructors = []; array in
                    //       craftInvokerFunction altogether.
                }
            }

            /** @param {number=} numArguments */
            function replacePublicSymbol(name, value, numArguments) {
                if (!Module.hasOwnProperty(name)) {
                    throwInternalError('Replacing nonexistant public symbol');
                }
                // If there's an overload table for this symbol, replace the symbol in the overload table instead.
                if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
                    Module[name].overloadTable[numArguments] = value;
                }
                else {
                    Module[name] = value;
                    Module[name].argCount = numArguments;
                }
            }

            function getDynCaller(sig, ptr) {
                assert(sig.indexOf('j') >= 0, 'getDynCaller should only be called with i64 sigs')
                var argCache = [];
                return function() {
                    argCache.length = arguments.length;
                    for (var i = 0; i < arguments.length; i++) {
                        argCache[i] = arguments[i];
                    }
                    return dynCall(sig, ptr, argCache);
                };
            }
            function embind__requireFunction(signature, rawFunction) {
                signature = readLatin1String(signature);

                function makeDynCaller() {
                    if (signature.indexOf('j') != -1) {
                        return getDynCaller(signature, rawFunction);
                    }
                    return wasmTable.get(rawFunction);
                }

                var fp = makeDynCaller();
                if (typeof fp !== "function") {
                    throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
                }
                return fp;
            }

            var UnboundTypeError=undefined;

            function getTypeName(type) {
                var ptr = ___getTypeName(type);
                var rv = readLatin1String(ptr);
                _free(ptr);
                return rv;
            }
            function throwUnboundTypeError(message, types) {
                var unboundTypes = [];
                var seen = {};
                function visit(type) {
                    if (seen[type]) {
                        return;
                    }
                    if (registeredTypes[type]) {
                        return;
                    }
                    if (typeDependencies[type]) {
                        typeDependencies[type].forEach(visit);
                        return;
                    }
                    unboundTypes.push(type);
                    seen[type] = true;
                }
                types.forEach(visit);

                throw new UnboundTypeError(message + ': ' + unboundTypes.map(getTypeName).join([', ']));
            }
            function __embind_register_class(
                rawType,
                rawPointerType,
                rawConstPointerType,
                baseClassRawType,
                getActualTypeSignature,
                getActualType,
                upcastSignature,
                upcast,
                downcastSignature,
                downcast,
                name,
                destructorSignature,
                rawDestructor
            ) {
                name = readLatin1String(name);
                getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
                if (upcast) {
                    upcast = embind__requireFunction(upcastSignature, upcast);
                }
                if (downcast) {
                    downcast = embind__requireFunction(downcastSignature, downcast);
                }
                rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
                var legalFunctionName = makeLegalFunctionName(name);

                exposePublicSymbol(legalFunctionName, function() {
                    // this code cannot run if baseClassRawType is zero
                    throwUnboundTypeError('Cannot construct ' + name + ' due to unbound types', [baseClassRawType]);
                });

                whenDependentTypesAreResolved(
                    [rawType, rawPointerType, rawConstPointerType],
                    baseClassRawType ? [baseClassRawType] : [],
                    function(base) {
                        base = base[0];

                        var baseClass;
                        var basePrototype;
                        if (baseClassRawType) {
                            baseClass = base.registeredClass;
                            basePrototype = baseClass.instancePrototype;
                        } else {
                            basePrototype = ClassHandle.prototype;
                        }

                        var constructor = createNamedFunction(legalFunctionName, function() {
                            if (Object.getPrototypeOf(this) !== instancePrototype) {
                                throw new BindingError("Use 'new' to construct " + name);
                            }
                            if (undefined === registeredClass.constructor_body) {
                                throw new BindingError(name + " has no accessible constructor");
                            }
                            var body = registeredClass.constructor_body[arguments.length];
                            if (undefined === body) {
                                throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                            }
                            return body.apply(this, arguments);
                        });

                        var instancePrototype = Object.create(basePrototype, {
                            constructor: { value: constructor },
                        });

                        constructor.prototype = instancePrototype;

                        var registeredClass = new RegisteredClass(
                            name,
                            constructor,
                            instancePrototype,
                            rawDestructor,
                            baseClass,
                            getActualType,
                            upcast,
                            downcast);

                        var referenceConverter = new RegisteredPointer(
                            name,
                            registeredClass,
                            true,
                            false,
                            false);

                        var pointerConverter = new RegisteredPointer(
                            name + '*',
                            registeredClass,
                            false,
                            false,
                            false);

                        var constPointerConverter = new RegisteredPointer(
                            name + ' const*',
                            registeredClass,
                            false,
                            true,
                            false);

                        registeredPointers[rawType] = {
                            pointerType: pointerConverter,
                            constPointerType: constPointerConverter
                        };

                        replacePublicSymbol(legalFunctionName, constructor);

                        return [referenceConverter, pointerConverter, constPointerConverter];
                    }
                );
            }

            function new_(constructor, argumentList) {
                if (!(constructor instanceof Function)) {
                    throw new TypeError('new_ called with constructor type ' + typeof(constructor) + " which is not a function");
                }

                /*
       * Previously, the following line was just:

       function dummy() {};

       * Unfortunately, Chrome was preserving 'dummy' as the object's name, even though at creation, the 'dummy' has the
       * correct constructor name.  Thus, objects created with IMVU.new would show up in the debugger as 'dummy', which
       * isn't very helpful.  Using IMVU.createNamedFunction addresses the issue.  Doublely-unfortunately, there's no way
       * to write a test for this behavior.  -NRD 2013.02.22
       */
                var dummy = createNamedFunction(constructor.name || 'unknownFunctionName', function(){});
                dummy.prototype = constructor.prototype;
                var obj = new dummy;

                var r = constructor.apply(obj, argumentList);
                return (r instanceof Object) ? r : obj;
            }

            function runDestructors(destructors) {
                while (destructors.length) {
                    var ptr = destructors.pop();
                    var del = destructors.pop();
                    del(ptr);
                }
            }
            function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
                // humanName: a human-readable string name for the function to be generated.
                // argTypes: An array that contains the embind type objects for all types in the function signature.
                //    argTypes[0] is the type object for the function return value.
                //    argTypes[1] is the type object for function this object/class type, or null if not crafting an invoker for a class method.
                //    argTypes[2...] are the actual function parameters.
                // classType: The embind type object for the class to be bound, or null if this is not a method of a class.
                // cppInvokerFunc: JS Function object to the C++-side function that interops into C++ code.
                // cppTargetFunc: Function pointer (an integer to FUNCTION_TABLE) to the target C++ function the cppInvokerFunc will end up calling.
                var argCount = argTypes.length;

                if (argCount < 2) {
                    throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
                }

                var isClassMethodFunc = (argTypes[1] !== null && classType !== null);

                // Free functions with signature "void function()" do not need an invoker that marshalls between wire types.
                // TODO: This omits argument count check - enable only at -O3 or similar.
                //    if (ENABLE_UNSAFE_OPTS && argCount == 2 && argTypes[0].name == "void" && !isClassMethodFunc) {
                //       return FUNCTION_TABLE[fn];
                //    }


                // Determine if we need to use a dynamic stack to store the destructors for the function parameters.
                // TODO: Remove this completely once all function invokers are being dynamically generated.
                var needsDestructorStack = false;

                for(var i = 1; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here.
                    if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) { // The type does not define a destructor function - must use dynamic stack
                        needsDestructorStack = true;
                        break;
                    }
                }

                var returns = (argTypes[0].name !== "void");

                var argsList = "";
                var argsListWired = "";
                for(var i = 0; i < argCount - 2; ++i) {
                    argsList += (i!==0?", ":"")+"arg"+i;
                    argsListWired += (i!==0?", ":"")+"arg"+i+"Wired";
                }

                var invokerFnBody =
                    "return function "+makeLegalFunctionName(humanName)+"("+argsList+") {\n" +
                    "if (arguments.length !== "+(argCount - 2)+") {\n" +
                    "throwBindingError('function "+humanName+" called with ' + arguments.length + ' arguments, expected "+(argCount - 2)+" args!');\n" +
                    "}\n";


                if (needsDestructorStack) {
                    invokerFnBody +=
                        "var destructors = [];\n";
                }

                var dtorStack = needsDestructorStack ? "destructors" : "null";
                var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
                var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];


                if (isClassMethodFunc) {
                    invokerFnBody += "var thisWired = classParam.toWireType("+dtorStack+", this);\n";
                }

                for(var i = 0; i < argCount - 2; ++i) {
                    invokerFnBody += "var arg"+i+"Wired = argType"+i+".toWireType("+dtorStack+", arg"+i+"); // "+argTypes[i+2].name+"\n";
                    args1.push("argType"+i);
                    args2.push(argTypes[i+2]);
                }

                if (isClassMethodFunc) {
                    argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
                }

                invokerFnBody +=
                    (returns?"var rv = ":"") + "invoker(fn"+(argsListWired.length>0?", ":"")+argsListWired+");\n";

                if (needsDestructorStack) {
                    invokerFnBody += "runDestructors(destructors);\n";
                } else {
                    for(var i = isClassMethodFunc?1:2; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
                        var paramName = (i === 1 ? "thisWired" : ("arg"+(i - 2)+"Wired"));
                        if (argTypes[i].destructorFunction !== null) {
                            invokerFnBody += paramName+"_dtor("+paramName+"); // "+argTypes[i].name+"\n";
                            args1.push(paramName+"_dtor");
                            args2.push(argTypes[i].destructorFunction);
                        }
                    }
                }

                if (returns) {
                    invokerFnBody += "var ret = retType.fromWireType(rv);\n" +
                        "return ret;\n";
                } else {
                }
                invokerFnBody += "}\n";

                args1.push(invokerFnBody);

                var invokerFunction = new_(Function, args1).apply(null, args2);
                return invokerFunction;
            }

            function heap32VectorToArray(count, firstElement) {
                var array = [];
                for (var i = 0; i < count; i++) {
                    array.push(HEAP32[(firstElement >> 2) + i]);
                }
                return array;
            }
            function __embind_register_class_class_function(
                rawClassType,
                methodName,
                argCount,
                rawArgTypesAddr,
                invokerSignature,
                rawInvoker,
                fn
            ) {
                var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
                methodName = readLatin1String(methodName);
                rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
                whenDependentTypesAreResolved([], [rawClassType], function(classType) {
                    classType = classType[0];
                    var humanName = classType.name + '.' + methodName;

                    function unboundTypesHandler() {
                        throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
                    }

                    var proto = classType.registeredClass.constructor;
                    if (undefined === proto[methodName]) {
                        // This is the first function to be registered with this name.
                        unboundTypesHandler.argCount = argCount-1;
                        proto[methodName] = unboundTypesHandler;
                    } else {
                        // There was an existing function with the same name registered. Set up a function overload routing table.
                        ensureOverloadTable(proto, methodName, humanName);
                        proto[methodName].overloadTable[argCount-1] = unboundTypesHandler;
                    }

                    whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
                        // Replace the initial unbound-types-handler stub with the proper function. If multiple overloads are registered,
                        // the function handlers go into an overload table.
                        var invokerArgsArray = [argTypes[0] /* return value */, null /* no class 'this'*/].concat(argTypes.slice(1) /* actual params */);
                        var func = craftInvokerFunction(humanName, invokerArgsArray, null /* no class 'this'*/, rawInvoker, fn);
                        if (undefined === proto[methodName].overloadTable) {
                            func.argCount = argCount-1;
                            proto[methodName] = func;
                        } else {
                            proto[methodName].overloadTable[argCount-1] = func;
                        }
                        return [];
                    });
                    return [];
                });
            }

            function __embind_register_class_constructor(
                rawClassType,
                argCount,
                rawArgTypesAddr,
                invokerSignature,
                invoker,
                rawConstructor
            ) {
                assert(argCount > 0);
                var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
                invoker = embind__requireFunction(invokerSignature, invoker);
                var args = [rawConstructor];
                var destructors = [];

                whenDependentTypesAreResolved([], [rawClassType], function(classType) {
                    classType = classType[0];
                    var humanName = 'constructor ' + classType.name;

                    if (undefined === classType.registeredClass.constructor_body) {
                        classType.registeredClass.constructor_body = [];
                    }
                    if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
                        throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount-1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                    }
                    classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
                        throwUnboundTypeError('Cannot construct ' + classType.name + ' due to unbound types', rawArgTypes);
                    };

                    whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
                        classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
                            if (arguments.length !== argCount - 1) {
                                throwBindingError(humanName + ' called with ' + arguments.length + ' arguments, expected ' + (argCount-1));
                            }
                            destructors.length = 0;
                            args.length = argCount;
                            for (var i = 1; i < argCount; ++i) {
                                args[i] = argTypes[i]['toWireType'](destructors, arguments[i - 1]);
                            }

                            var ptr = invoker.apply(null, args);
                            runDestructors(destructors);

                            return argTypes[0]['fromWireType'](ptr);
                        };
                        return [];
                    });
                    return [];
                });
            }

            function __embind_register_class_function(
                rawClassType,
                methodName,
                argCount,
                rawArgTypesAddr, // [ReturnType, ThisType, Args...]
                invokerSignature,
                rawInvoker,
                context,
                isPureVirtual
            ) {
                var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
                methodName = readLatin1String(methodName);
                rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);

                whenDependentTypesAreResolved([], [rawClassType], function(classType) {
                    classType = classType[0];
                    var humanName = classType.name + '.' + methodName;

                    if (isPureVirtual) {
                        classType.registeredClass.pureVirtualFunctions.push(methodName);
                    }

                    function unboundTypesHandler() {
                        throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
                    }

                    var proto = classType.registeredClass.instancePrototype;
                    var method = proto[methodName];
                    if (undefined === method || (undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2)) {
                        // This is the first overload to be registered, OR we are replacing a function in the base class with a function in the derived class.
                        unboundTypesHandler.argCount = argCount - 2;
                        unboundTypesHandler.className = classType.name;
                        proto[methodName] = unboundTypesHandler;
                    } else {
                        // There was an existing function with the same name registered. Set up a function overload routing table.
                        ensureOverloadTable(proto, methodName, humanName);
                        proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
                    }

                    whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {

                        var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);

                        // Replace the initial unbound-handler-stub function with the appropriate member function, now that all types
                        // are resolved. If multiple overloads are registered for this function, the function goes into an overload table.
                        if (undefined === proto[methodName].overloadTable) {
                            // Set argCount in case an overload is registered later
                            memberFunction.argCount = argCount - 2;
                            proto[methodName] = memberFunction;
                        } else {
                            proto[methodName].overloadTable[argCount - 2] = memberFunction;
                        }

                        return [];
                    });
                    return [];
                });
            }

            var emval_free_list=[];

            var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];
            function __emval_decref(handle) {
                if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
                    emval_handle_array[handle] = undefined;
                    emval_free_list.push(handle);
                }
            }

            function count_emval_handles() {
                var count = 0;
                for (var i = 5; i < emval_handle_array.length; ++i) {
                    if (emval_handle_array[i] !== undefined) {
                        ++count;
                    }
                }
                return count;
            }

            function get_first_emval() {
                for (var i = 5; i < emval_handle_array.length; ++i) {
                    if (emval_handle_array[i] !== undefined) {
                        return emval_handle_array[i];
                    }
                }
                return null;
            }
            function init_emval() {
                Module['count_emval_handles'] = count_emval_handles;
                Module['get_first_emval'] = get_first_emval;
            }
            function __emval_register(value) {

                switch(value){
                    case undefined :{ return 1; }
                    case null :{ return 2; }
                    case true :{ return 3; }
                    case false :{ return 4; }
                    default:{
                        var handle = emval_free_list.length ?
                            emval_free_list.pop() :
                            emval_handle_array.length;

                        emval_handle_array[handle] = {refcount: 1, value: value};
                        return handle;
                    }
                }
            }
            function __embind_register_emval(rawType, name) {
                name = readLatin1String(name);
                registerType(rawType, {
                    name: name,
                    'fromWireType': function(handle) {
                        var rv = emval_handle_array[handle].value;
                        __emval_decref(handle);
                        return rv;
                    },
                    'toWireType': function(destructors, value) {
                        return __emval_register(value);
                    },
                    'argPackAdvance': 8,
                    'readValueFromPointer': simpleReadValueFromPointer,
                    destructorFunction: null, // This type does not need a destructor

                    // TODO: do we need a deleteObject here?  write a test where
                    // emval is passed into JS via an interface
                });
            }

            function _embind_repr(v) {
                if (v === null) {
                    return 'null';
                }
                var t = typeof v;
                if (t === 'object' || t === 'array' || t === 'function') {
                    return v.toString();
                } else {
                    return '' + v;
                }
            }

            function floatReadValueFromPointer(name, shift) {
                switch (shift) {
                    case 2: return function(pointer) {
                        return this['fromWireType'](HEAPF32[pointer >> 2]);
                    };
                    case 3: return function(pointer) {
                        return this['fromWireType'](HEAPF64[pointer >> 3]);
                    };
                    default:
                        throw new TypeError("Unknown float type: " + name);
                }
            }
            function __embind_register_float(rawType, name, size) {
                var shift = getShiftFromSize(size);
                name = readLatin1String(name);
                registerType(rawType, {
                    name: name,
                    'fromWireType': function(value) {
                        return value;
                    },
                    'toWireType': function(destructors, value) {
                        // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
                        // avoid the following if() and assume value is of proper type.
                        if (typeof value !== "number" && typeof value !== "boolean") {
                            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
                        }
                        return value;
                    },
                    'argPackAdvance': 8,
                    'readValueFromPointer': floatReadValueFromPointer(name, shift),
                    destructorFunction: null, // This type does not need a destructor
                });
            }

            function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
                var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
                name = readLatin1String(name);

                rawInvoker = embind__requireFunction(signature, rawInvoker);

                exposePublicSymbol(name, function() {
                    throwUnboundTypeError('Cannot call ' + name + ' due to unbound types', argTypes);
                }, argCount - 1);

                whenDependentTypesAreResolved([], argTypes, function(argTypes) {
                    var invokerArgsArray = [argTypes[0] /* return value */, null /* no class 'this'*/].concat(argTypes.slice(1) /* actual params */);
                    replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null /* no class 'this'*/, rawInvoker, fn), argCount - 1);
                    return [];
                });
            }

            function integerReadValueFromPointer(name, shift, signed) {
                // integers are quite common, so generate very specialized functions
                switch (shift) {
                    case 0: return signed ?
                        function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
                        function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
                    case 1: return signed ?
                        function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
                        function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
                    case 2: return signed ?
                        function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
                        function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
                    default:
                        throw new TypeError("Unknown integer type: " + name);
                }
            }
            function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
                name = readLatin1String(name);
                if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
                    maxRange = 4294967295;
                }

                var shift = getShiftFromSize(size);

                var fromWireType = function(value) {
                    return value;
                };

                if (minRange === 0) {
                    var bitshift = 32 - 8*size;
                    fromWireType = function(value) {
                        return (value << bitshift) >>> bitshift;
                    };
                }

                var isUnsignedType = (name.indexOf('unsigned') != -1);

                registerType(primitiveType, {
                    name: name,
                    'fromWireType': fromWireType,
                    'toWireType': function(destructors, value) {
                        // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
                        // avoid the following two if()s and assume value is of proper type.
                        if (typeof value !== "number" && typeof value !== "boolean") {
                            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
                        }
                        if (value < minRange || value > maxRange) {
                            throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
                        }
                        return isUnsignedType ? (value >>> 0) : (value | 0);
                    },
                    'argPackAdvance': 8,
                    'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
                    destructorFunction: null, // This type does not need a destructor
                });
            }

            function __embind_register_memory_view(rawType, dataTypeIndex, name) {
                var typeMapping = [
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array,
                ];

                var TA = typeMapping[dataTypeIndex];

                function decodeMemoryView(handle) {
                    handle = handle >> 2;
                    var heap = HEAPU32;
                    var size = heap[handle]; // in elements
                    var data = heap[handle + 1]; // byte offset into emscripten heap
                    return new TA(buffer, data, size);
                }

                name = readLatin1String(name);
                registerType(rawType, {
                    name: name,
                    'fromWireType': decodeMemoryView,
                    'argPackAdvance': 8,
                    'readValueFromPointer': decodeMemoryView,
                }, {
                    ignoreDuplicateRegistrations: true,
                });
            }

            function __embind_register_std_string(rawType, name) {
                name = readLatin1String(name);
                var stdStringIsUTF8
                    //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
                    = (name === "std::string");

                registerType(rawType, {
                    name: name,
                    'fromWireType': function(value) {
                        var length = HEAPU32[value >> 2];

                        var str;
                        if (stdStringIsUTF8) {
                            var decodeStartPtr = value + 4;
                            // Looping here to support possible embedded '0' bytes
                            for (var i = 0; i <= length; ++i) {
                                var currentBytePtr = value + 4 + i;
                                if (i == length || HEAPU8[currentBytePtr] == 0) {
                                    var maxRead = currentBytePtr - decodeStartPtr;
                                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                                    if (str === undefined) {
                                        str = stringSegment;
                                    } else {
                                        str += String.fromCharCode(0);
                                        str += stringSegment;
                                    }
                                    decodeStartPtr = currentBytePtr + 1;
                                }
                            }
                        } else {
                            var a = new Array(length);
                            for (var i = 0; i < length; ++i) {
                                a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
                            }
                            str = a.join('');
                        }

                        _free(value);

                        return str;
                    },
                    'toWireType': function(destructors, value) {
                        if (value instanceof ArrayBuffer) {
                            value = new Uint8Array(value);
                        }

                        var getLength;
                        var valueIsOfTypeString = (typeof value === 'string');

                        if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                            throwBindingError('Cannot pass non-string to std::string');
                        }
                        if (stdStringIsUTF8 && valueIsOfTypeString) {
                            getLength = function() {return lengthBytesUTF8(value);};
                        } else {
                            getLength = function() {return value.length;};
                        }

                        // assumes 4-byte alignment
                        var length = getLength();
                        var ptr = _malloc(4 + length + 1);
                        HEAPU32[ptr >> 2] = length;
                        if (stdStringIsUTF8 && valueIsOfTypeString) {
                            stringToUTF8(value, ptr + 4, length + 1);
                        } else {
                            if (valueIsOfTypeString) {
                                for (var i = 0; i < length; ++i) {
                                    var charCode = value.charCodeAt(i);
                                    if (charCode > 255) {
                                        _free(ptr);
                                        throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                                    }
                                    HEAPU8[ptr + 4 + i] = charCode;
                                }
                            } else {
                                for (var i = 0; i < length; ++i) {
                                    HEAPU8[ptr + 4 + i] = value[i];
                                }
                            }
                        }

                        if (destructors !== null) {
                            destructors.push(_free, ptr);
                        }
                        return ptr;
                    },
                    'argPackAdvance': 8,
                    'readValueFromPointer': simpleReadValueFromPointer,
                    destructorFunction: function(ptr) { _free(ptr); },
                });
            }

            function __embind_register_std_wstring(rawType, charSize, name) {
                name = readLatin1String(name);
                var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
                if (charSize === 2) {
                    decodeString = UTF16ToString;
                    encodeString = stringToUTF16;
                    lengthBytesUTF = lengthBytesUTF16;
                    getHeap = function() { return HEAPU16; };
                    shift = 1;
                } else if (charSize === 4) {
                    decodeString = UTF32ToString;
                    encodeString = stringToUTF32;
                    lengthBytesUTF = lengthBytesUTF32;
                    getHeap = function() { return HEAPU32; };
                    shift = 2;
                }
                registerType(rawType, {
                    name: name,
                    'fromWireType': function(value) {
                        // Code mostly taken from _embind_register_std_string fromWireType
                        var length = HEAPU32[value >> 2];
                        var HEAP = getHeap();
                        var str;

                        var decodeStartPtr = value + 4;
                        // Looping here to support possible embedded '0' bytes
                        for (var i = 0; i <= length; ++i) {
                            var currentBytePtr = value + 4 + i * charSize;
                            if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                                var maxReadBytes = currentBytePtr - decodeStartPtr;
                                var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                                if (str === undefined) {
                                    str = stringSegment;
                                } else {
                                    str += String.fromCharCode(0);
                                    str += stringSegment;
                                }
                                decodeStartPtr = currentBytePtr + charSize;
                            }
                        }

                        _free(value);

                        return str;
                    },
                    'toWireType': function(destructors, value) {
                        if (!(typeof value === 'string')) {
                            throwBindingError('Cannot pass non-string to C++ string type ' + name);
                        }

                        // assumes 4-byte alignment
                        var length = lengthBytesUTF(value);
                        var ptr = _malloc(4 + length + charSize);
                        HEAPU32[ptr >> 2] = length >> shift;

                        encodeString(value, ptr + 4, length + charSize);

                        if (destructors !== null) {
                            destructors.push(_free, ptr);
                        }
                        return ptr;
                    },
                    'argPackAdvance': 8,
                    'readValueFromPointer': simpleReadValueFromPointer,
                    destructorFunction: function(ptr) { _free(ptr); },
                });
            }

            function __embind_register_void(rawType, name) {
                name = readLatin1String(name);
                registerType(rawType, {
                    isVoid: true, // void return values can be optimized out sometimes
                    name: name,
                    'argPackAdvance': 0,
                    'fromWireType': function() {
                        return undefined;
                    },
                    'toWireType': function(destructors, o) {
                        // TODO: assert if anything else is given?
                        return undefined;
                    },
                });
            }

            function _abort() {
                abort();
            }

            function _emscripten_memcpy_big(dest, src, num) {
                HEAPU8.copyWithin(dest, src, src + num);
            }

            function _emscripten_get_heap_size() {
                return HEAPU8.length;
            }

            function abortOnCannotGrowMemory(requestedSize) {
                abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
            }
            function _emscripten_resize_heap(requestedSize) {
                requestedSize = requestedSize >>> 0;
                abortOnCannotGrowMemory(requestedSize);
            }

            var PATH={splitPath:function(filename) {
                    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                    return splitPathRe.exec(filename).slice(1);
                },normalizeArray:function(parts, allowAboveRoot) {
                    // if the path tries to go above the root, `up` ends up > 0
                    var up = 0;
                    for (var i = parts.length - 1; i >= 0; i--) {
                        var last = parts[i];
                        if (last === '.') {
                            parts.splice(i, 1);
                        } else if (last === '..') {
                            parts.splice(i, 1);
                            up++;
                        } else if (up) {
                            parts.splice(i, 1);
                            up--;
                        }
                    }
                    // if the path is allowed to go above the root, restore leading ..s
                    if (allowAboveRoot) {
                        for (; up; up--) {
                            parts.unshift('..');
                        }
                    }
                    return parts;
                },normalize:function(path) {
                    var isAbsolute = path.charAt(0) === '/',
                        trailingSlash = path.substr(-1) === '/';
                    // Normalize the path
                    path = PATH.normalizeArray(path.split('/').filter(function(p) {
                        return !!p;
                    }), !isAbsolute).join('/');
                    if (!path && !isAbsolute) {
                        path = '.';
                    }
                    if (path && trailingSlash) {
                        path += '/';
                    }
                    return (isAbsolute ? '/' : '') + path;
                },dirname:function(path) {
                    var result = PATH.splitPath(path),
                        root = result[0],
                        dir = result[1];
                    if (!root && !dir) {
                        // No dirname whatsoever
                        return '.';
                    }
                    if (dir) {
                        // It has a dirname, strip trailing slash
                        dir = dir.substr(0, dir.length - 1);
                    }
                    return root + dir;
                },basename:function(path) {
                    // EMSCRIPTEN return '/'' for '/', not an empty string
                    if (path === '/') return '/';
                    path = PATH.normalize(path);
                    path = path.replace(/\/$/, "");
                    var lastSlash = path.lastIndexOf('/');
                    if (lastSlash === -1) return path;
                    return path.substr(lastSlash+1);
                },extname:function(path) {
                    return PATH.splitPath(path)[3];
                },join:function() {
                    var paths = Array.prototype.slice.call(arguments, 0);
                    return PATH.normalize(paths.join('/'));
                },join2:function(l, r) {
                    return PATH.normalize(l + '/' + r);
                }};
            var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
                    var buffer = SYSCALLS.buffers[stream];
                    assert(buffer);
                    if (curr === 0 || curr === 10) {
                        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
                        buffer.length = 0;
                    } else {
                        buffer.push(curr);
                    }
                },varargs:undefined,get:function() {
                    assert(SYSCALLS.varargs != undefined);
                    SYSCALLS.varargs += 4;
                    var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
                    return ret;
                },getStr:function(ptr) {
                    var ret = UTF8ToString(ptr);
                    return ret;
                },get64:function(low, high) {
                    if (low >= 0) assert(high === 0);
                    else assert(high === -1);
                    return low;
                }};
            function _fd_close(fd) {
                abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
                return 0;
            }

            function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
                abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
            }

            function flush_NO_FILESYSTEM() {
                // flush anything remaining in the buffers during shutdown
                if (typeof _fflush !== 'undefined') _fflush(0);
                var buffers = SYSCALLS.buffers;
                if (buffers[1].length) SYSCALLS.printChar(1, 10);
                if (buffers[2].length) SYSCALLS.printChar(2, 10);
            }
            function _fd_write(fd, iov, iovcnt, pnum) {
                // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
                var num = 0;
                for (var i = 0; i < iovcnt; i++) {
                    var ptr = HEAP32[(((iov)+(i*8))>>2)];
                    var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
                    for (var j = 0; j < len; j++) {
                        SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
                    }
                    num += len;
                }
                HEAP32[((pnum)>>2)]=num
                return 0;
            }

            function _getTempRet0() {
                return (getTempRet0() | 0);
            }

            function getRandomDevice() {
                if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
                    // for modern web browsers
                    var randomBuffer = new Uint8Array(1);
                    return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
                } else
                    // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
                    return function() { abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"); };
            }
            function _getentropy(buffer, size) {
                if (!_getentropy.randomDevice) {
                    _getentropy.randomDevice = getRandomDevice();
                }
                for (var i = 0; i < size; i++) {
                    HEAP8[(((buffer)+(i))>>0)]=_getentropy.randomDevice()
                }
                return 0;
            }

            var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};

            function setErrNo(value) {
                HEAP32[((___errno_location())>>2)]=value;
                return value;
            }
            function _raise(sig) {
                err('Calling stub instead of raise()');
                setErrNo(ERRNO_CODES.ENOSYS);
                warnOnce('raise() returning an error as we do not support it');
                return -1;
            }

            function _setTempRet0($i) {
                setTempRet0(($i) | 0);
            }

            function _time(ptr) {
                var ret = (Date.now()/1000)|0;
                if (ptr) {
                    HEAP32[((ptr)>>2)]=ret;
                }
                return ret;
            }
            embind_init_charCodes();
            BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
            InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
            init_ClassHandle();
            init_RegisteredPointer();
            init_embind();;
            UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');;
            init_emval();;
            var ASSERTIONS = true;



            /** @type {function(string, boolean=, number=)} */
            function intArrayFromString(stringy, dontAddNull, length) {
                var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
                var u8array = new Array(len);
                var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
                if (dontAddNull) u8array.length = numBytesWritten;
                return u8array;
            }

            function intArrayToString(array) {
                var ret = [];
                for (var i = 0; i < array.length; i++) {
                    var chr = array[i];
                    if (chr > 0xFF) {
                        if (ASSERTIONS) {
                            assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
                        }
                        chr &= 0xFF;
                    }
                    ret.push(String.fromCharCode(chr));
                }
                return ret.join('');
            }



            __ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
            var asmLibraryArg = { "__cxa_allocate_exception": ___cxa_allocate_exception, "__cxa_atexit": ___cxa_atexit, "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2, "__cxa_free_exception": ___cxa_free_exception, "__cxa_throw": ___cxa_throw, "__cxa_uncaught_exceptions": ___cxa_uncaught_exceptions, "__resumeException": ___resumeException, "_embind_register_bool": __embind_register_bool, "_embind_register_class": __embind_register_class, "_embind_register_class_class_function": __embind_register_class_class_function, "_embind_register_class_constructor": __embind_register_class_constructor, "_embind_register_class_function": __embind_register_class_function, "_embind_register_emval": __embind_register_emval, "_embind_register_float": __embind_register_float, "_embind_register_function": __embind_register_function, "_embind_register_integer": __embind_register_integer, "_embind_register_memory_view": __embind_register_memory_view, "_embind_register_std_string": __embind_register_std_string, "_embind_register_std_wstring": __embind_register_std_wstring, "_embind_register_void": __embind_register_void, "abort": _abort, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "fd_close": _fd_close, "fd_seek": _fd_seek, "fd_write": _fd_write, "getTempRet0": _getTempRet0, "getentropy": _getentropy, "invoke_iii": invoke_iii, "invoke_iiii": invoke_iiii, "invoke_vii": invoke_vii, "invoke_viii": invoke_viii, "invoke_viiii": invoke_viiii, "memory": wasmMemory, "raise": _raise, "setTempRet0": _setTempRet0, "time": _time };
            var asm = createWasm();
            /** @type {function(...*):?} */
            var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

            /** @type {function(...*):?} */
            var _malloc = Module["_malloc"] = createExportWrapper("malloc");

            /** @type {function(...*):?} */
            var _free = Module["_free"] = createExportWrapper("free");

            /** @type {function(...*):?} */
            var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");

            /** @type {function(...*):?} */
            var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");

            /** @type {function(...*):?} */
            var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

            /** @type {function(...*):?} */
            var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

            /** @type {function(...*):?} */
            var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

            /** @type {function(...*):?} */
            var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

            /** @type {function(...*):?} */
            var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

            /** @type {function(...*):?} */
            var __ZSt18uncaught_exceptionv = Module["__ZSt18uncaught_exceptionv"] = createExportWrapper("_ZSt18uncaught_exceptionv");

            /** @type {function(...*):?} */
            var dynCall_jii = Module["dynCall_jii"] = createExportWrapper("dynCall_jii");

            /** @type {function(...*):?} */
            var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

            /** @type {function(...*):?} */
            var __growWasmMemory = Module["__growWasmMemory"] = createExportWrapper("__growWasmMemory");


            function invoke_vii(index,a1,a2) {
                var sp = stackSave();
                try {
                    wasmTable.get(index)(a1,a2);
                } catch(e) {
                    stackRestore(sp);
                    if (e !== e+0 && e !== 'longjmp') throw e;
                    _setThrew(1, 0);
                }
            }

            function invoke_iii(index,a1,a2) {
                var sp = stackSave();
                try {
                    return wasmTable.get(index)(a1,a2);
                } catch(e) {
                    stackRestore(sp);
                    if (e !== e+0 && e !== 'longjmp') throw e;
                    _setThrew(1, 0);
                }
            }

            function invoke_viiii(index,a1,a2,a3,a4) {
                var sp = stackSave();
                try {
                    wasmTable.get(index)(a1,a2,a3,a4);
                } catch(e) {
                    stackRestore(sp);
                    if (e !== e+0 && e !== 'longjmp') throw e;
                    _setThrew(1, 0);
                }
            }

            function invoke_iiii(index,a1,a2,a3) {
                var sp = stackSave();
                try {
                    return wasmTable.get(index)(a1,a2,a3);
                } catch(e) {
                    stackRestore(sp);
                    if (e !== e+0 && e !== 'longjmp') throw e;
                    _setThrew(1, 0);
                }
            }

            function invoke_viii(index,a1,a2,a3) {
                var sp = stackSave();
                try {
                    wasmTable.get(index)(a1,a2,a3);
                } catch(e) {
                    stackRestore(sp);
                    if (e !== e+0 && e !== 'longjmp') throw e;
                    _setThrew(1, 0);
                }
            }




// === Auto-generated postamble setup entry stuff ===

            if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
            if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
            if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
            if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
            if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
            if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
            if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
            if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
            if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt")) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory")) Module["abortOnCannotGrowMemory"] = function() { abort("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() { abort("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "abortStackOverflow")) Module["abortStackOverflow"] = function() { abort("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM")) Module["flush_NO_FILESYSTEM"] = function() { abort("'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs")) Module["ExceptionInfoAttrs"] = function() { abort("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array")) Module["emval_handle_array"] = function() { abort("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list")) Module["emval_free_list"] = function() { abort("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols")) Module["emval_symbols"] = function() { abort("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "init_emval")) Module["init_emval"] = function() { abort("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles")) Module["count_emval_handles"] = function() { abort("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval")) Module["get_first_emval"] = function() { abort("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol")) Module["getStringOrSymbol"] = function() { abort("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "requireHandle")) Module["requireHandle"] = function() { abort("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emval_newers")) Module["emval_newers"] = function() { abort("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator")) Module["craftEmvalAllocator"] = function() { abort("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global")) Module["emval_get_global"] = function() { abort("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers")) Module["emval_methodCallers"] = function() { abort("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "InternalError")) Module["InternalError"] = function() { abort("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "BindingError")) Module["BindingError"] = function() { abort("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError")) Module["UnboundTypeError"] = function() { abort("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError")) Module["PureVirtualError"] = function() { abort("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "init_embind")) Module["init_embind"] = function() { abort("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError")) Module["throwInternalError"] = function() { abort("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError")) Module["throwBindingError"] = function() { abort("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError")) Module["throwUnboundTypeError"] = function() { abort("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable")) Module["ensureOverloadTable"] = function() { abort("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol")) Module["exposePublicSymbol"] = function() { abort("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol")) Module["replacePublicSymbol"] = function() { abort("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "extendError")) Module["extendError"] = function() { abort("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction")) Module["createNamedFunction"] = function() { abort("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances")) Module["registeredInstances"] = function() { abort("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer")) Module["getBasestPointer"] = function() { abort("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance")) Module["registerInheritedInstance"] = function() { abort("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance")) Module["unregisterInheritedInstance"] = function() { abort("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance")) Module["getInheritedInstance"] = function() { abort("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount")) Module["getInheritedInstanceCount"] = function() { abort("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances")) Module["getLiveInheritedInstances"] = function() { abort("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes")) Module["registeredTypes"] = function() { abort("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies")) Module["awaitingDependencies"] = function() { abort("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies")) Module["typeDependencies"] = function() { abort("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers")) Module["registeredPointers"] = function() { abort("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "registerType")) Module["registerType"] = function() { abort("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved")) Module["whenDependentTypesAreResolved"] = function() { abort("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes")) Module["embind_charCodes"] = function() { abort("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes")) Module["embind_init_charCodes"] = function() { abort("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String")) Module["readLatin1String"] = function() { abort("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getTypeName")) Module["getTypeName"] = function() { abort("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray")) Module["heap32VectorToArray"] = function() { abort("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType")) Module["requireRegisteredType"] = function() { abort("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize")) Module["getShiftFromSize"] = function() { abort("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer")) Module["integerReadValueFromPointer"] = function() { abort("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer")) Module["enumReadValueFromPointer"] = function() { abort("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer")) Module["floatReadValueFromPointer"] = function() { abort("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer")) Module["simpleReadValueFromPointer"] = function() { abort("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "runDestructors")) Module["runDestructors"] = function() { abort("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "new_")) Module["new_"] = function() { abort("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction")) Module["craftInvokerFunction"] = function() { abort("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction")) Module["embind__requireFunction"] = function() { abort("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations")) Module["tupleRegistrations"] = function() { abort("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations")) Module["structRegistrations"] = function() { abort("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType")) Module["genericPointerToWireType"] = function() { abort("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType")) Module["constNoSmartPtrRawPointerToWireType"] = function() { abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType")) Module["nonConstNoSmartPtrRawPointerToWireType"] = function() { abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer")) Module["init_RegisteredPointer"] = function() { abort("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer")) Module["RegisteredPointer"] = function() { abort("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee")) Module["RegisteredPointer_getPointee"] = function() { abort("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor")) Module["RegisteredPointer_destructor"] = function() { abort("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject")) Module["RegisteredPointer_deleteObject"] = function() { abort("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType")) Module["RegisteredPointer_fromWireType"] = function() { abort("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "runDestructor")) Module["runDestructor"] = function() { abort("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle")) Module["releaseClassHandle"] = function() { abort("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup")) Module["finalizationGroup"] = function() { abort("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps")) Module["detachFinalizer_deps"] = function() { abort("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer")) Module["detachFinalizer"] = function() { abort("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer")) Module["attachFinalizer"] = function() { abort("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle")) Module["makeClassHandle"] = function() { abort("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle")) Module["init_ClassHandle"] = function() { abort("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle")) Module["ClassHandle"] = function() { abort("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf")) Module["ClassHandle_isAliasOf"] = function() { abort("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted")) Module["throwInstanceAlreadyDeleted"] = function() { abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone")) Module["ClassHandle_clone"] = function() { abort("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete")) Module["ClassHandle_delete"] = function() { abort("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue")) Module["deletionQueue"] = function() { abort("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted")) Module["ClassHandle_isDeleted"] = function() { abort("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater")) Module["ClassHandle_deleteLater"] = function() { abort("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes")) Module["flushPendingDeletes"] = function() { abort("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "delayFunction")) Module["delayFunction"] = function() { abort("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction")) Module["setDelayFunction"] = function() { abort("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass")) Module["RegisteredClass"] = function() { abort("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer")) Module["shallowCopyInternalPointer"] = function() { abort("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer")) Module["downcastPointer"] = function() { abort("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer")) Module["upcastPointer"] = function() { abort("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "validateThis")) Module["validateThis"] = function() { abort("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "char_0")) Module["char_0"] = function() { abort("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "char_9")) Module["char_9"] = function() { abort("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName")) Module["makeLegalFunctionName"] = function() { abort("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
            Module["writeStackCookie"] = writeStackCookie;
            Module["checkStackCookie"] = checkStackCookie;if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
            if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });


            var calledRun;

            /**
             * @constructor
             * @this {ExitStatus}
             */
            function ExitStatus(status) {
                this.name = "ExitStatus";
                this.message = "Program terminated with exit(" + status + ")";
                this.status = status;
            }

            var calledMain = false;


            dependenciesFulfilled = function runCaller() {
                // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
                if (!calledRun) run();
                if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
            };





            /** @type {function(Array=)} */
            function run(args) {
                args = args || arguments_;

                if (runDependencies > 0) {
                    return;
                }

                writeStackCookie();

                preRun();

                if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

                function doRun() {
                    // run may have just been called through dependencies being fulfilled just in this very frame,
                    // or while the async setStatus time below was happening
                    if (calledRun) return;
                    calledRun = true;
                    Module['calledRun'] = true;

                    if (ABORT) return;

                    initRuntime();

                    preMain();

                    readyPromiseResolve(Module);
                    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

                    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

                    postRun();
                }

                if (Module['setStatus']) {
                    Module['setStatus']('Running...');
                    setTimeout(function() {
                        setTimeout(function() {
                            Module['setStatus']('');
                        }, 1);
                        doRun();
                    }, 1);
                } else
                {
                    doRun();
                }
                if (!ABORT) checkStackCookie();
            }
            Module['run'] = run;

            function checkUnflushedContent() {
                // Compiler settings do not allow exiting the runtime, so flushing
                // the streams is not possible. but in ASSERTIONS mode we check
                // if there was something to flush, and if so tell the user they
                // should request that the runtime be exitable.
                // Normally we would not even include flush() at all, but in ASSERTIONS
                // builds we do so just for this check, and here we see if there is any
                // content to flush, that is, we check if there would have been
                // something a non-ASSERTIONS build would have not seen.
                // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
                // mode (which has its own special function for this; otherwise, all
                // the code is inside libc)
                var print = out;
                var printErr = err;
                var has = false;
                out = err = function(x) {
                    has = true;
                }
                try { // it doesn't matter if it fails
                    var flush = flush_NO_FILESYSTEM;
                    if (flush) flush();
                } catch(e) {}
                out = print;
                err = printErr;
                if (has) {
                    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
                    warnOnce('(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)');
                }
            }

            /** @param {boolean|number=} implicit */
            function exit(status, implicit) {
                checkUnflushedContent();

                // if this is just main exit-ing implicitly, and the status is 0, then we
                // don't need to do anything here and can just leave. if the status is
                // non-zero, though, then we need to report it.
                // (we may have warned about this earlier, if a situation justifies doing so)
                if (implicit && noExitRuntime && status === 0) {
                    return;
                }

                if (noExitRuntime) {
                    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
                    if (!implicit) {
                        var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
                        readyPromiseReject(msg);
                        err(msg);
                    }
                } else {

                    EXITSTATUS = status;

                    exitRuntime();

                    if (Module['onExit']) Module['onExit'](status);

                    ABORT = true;
                }

                quit_(status, new ExitStatus(status));
            }

            if (Module['preInit']) {
                if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
                while (Module['preInit'].length > 0) {
                    Module['preInit'].pop()();
                }
            }


            noExitRuntime = true;

            run();






// {{MODULE_ADDITIONS}}





            return Module.ready
        }
    );
})();
export default Module;
