import { FFICompatArrayType } from './FFICompatArray';
declare type IntType = number;
declare type UInt64Type = number;
export declare const FFI_RETURN_OK = 0;
export declare const FFI_RETURN_INTERNAL_ERROR = 1;
export declare const FFI_RETURN_INPUT_ERROR = 2;
export declare const RANDOM_LENGTH = 32;
interface NativeCalls {
    FFI_ProfileKey_getCommitment: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_ProfileKey_getProfileKeyVersion: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_ProfileKeyCommitment_getProfileKeyVersion: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_ProfileKeyCommitment_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_GroupSecretParams_generateDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_GroupSecretParams_deriveFromMasterKey: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_GroupSecretParams_getMasterKey: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_GroupSecretParams_getPublicParams: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_GroupSecretParams_signDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type) => IntType;
    FFI_GroupSecretParams_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_GroupSecretParams_encryptUuid: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_GroupSecretParams_decryptUuid: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_GroupSecretParams_encryptProfileKeyDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type, param9: FFICompatArrayType, param10: UInt64Type) => IntType;
    FFI_GroupSecretParams_decryptProfileKey: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type) => IntType;
    FFI_GroupSecretParams_encryptBlobDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type) => IntType;
    FFI_GroupSecretParams_decryptBlob: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_ServerSecretParams_generateDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_ServerSecretParams_getPublicParams: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_ServerSecretParams_signDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type) => IntType;
    FFI_ServerSecretParams_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_ServerPublicParams_receiveAuthCredential: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: IntType, param6: FFICompatArrayType, param7: UInt64Type, param8: FFICompatArrayType, param9: UInt64Type) => IntType;
    FFI_ServerPublicParams_createAuthCredentialPresentationDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type, param9: FFICompatArrayType, param10: UInt64Type) => IntType;
    FFI_ServerPublicParams_createProfileKeyCredentialRequestContextDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type, param9: FFICompatArrayType, param10: UInt64Type) => IntType;
    FFI_ServerPublicParams_receiveProfileKeyCredential: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type) => IntType;
    FFI_ServerPublicParams_createProfileKeyCredentialPresentationDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type, param9: FFICompatArrayType, param10: UInt64Type) => IntType;
    FFI_ServerSecretParams_issueAuthCredentialDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: IntType, param8: FFICompatArrayType, param9: UInt64Type) => IntType;
    FFI_ServerSecretParams_verifyAuthCredentialPresentation: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_ServerSecretParams_issueProfileKeyCredentialDeterministic: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type, param7: FFICompatArrayType, param8: UInt64Type, param9: FFICompatArrayType, param10: UInt64Type, param11: FFICompatArrayType, param12: UInt64Type) => IntType;
    FFI_ServerSecretParams_verifyProfileKeyCredentialPresentation: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_GroupPublicParams_getGroupIdentifier: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_GroupPublicParams_verifySignature: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_GroupPublicParams_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_ServerPublicParams_verifySignature: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type, param5: FFICompatArrayType, param6: UInt64Type) => IntType;
    FFI_ServerPublicParams_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_AuthCredentialResponse_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_AuthCredential_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_AuthCredentialPresentation_getUuidCiphertext: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_AuthCredentialPresentation_getRedemptionTime: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_AuthCredentialPresentation_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_ProfileKeyCredentialRequestContext_getRequest: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_ProfileKeyCredentialRequestContext_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_ProfileKeyCredentialRequest_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_ProfileKeyCredentialResponse_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_ProfileKeyCredential_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_ProfileKeyCredentialPresentation_getUuidCiphertext: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_ProfileKeyCredentialPresentation_getProfileKeyCiphertext: (param1: FFICompatArrayType, param2: UInt64Type, param3: FFICompatArrayType, param4: UInt64Type) => IntType;
    FFI_ProfileKeyCredentialPresentation_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_UuidCiphertext_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
    FFI_ProfileKeyCiphertext_checkValidContents: (param2: FFICompatArrayType, param3: UInt64Type) => IntType;
}
declare const library: NativeCalls;
export default library;
